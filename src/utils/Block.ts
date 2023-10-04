import EventBus from './EventBus';
import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  private _eventBus: () => EventBus;

  private _element: HTMLElement | null = null;
  private _meta: {props: any};

  protected props: any;
  protected refs: Record<string, Block> = {};

  public id: string = nanoid(6);
  public children: Record<string, Block>;


  /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
  constructor(propsWithChildren: any = {}) {
    
    const _eventBus = new EventBus();
    const {props, children} = this._getChildrenAndProps(propsWithChildren);
    
    this._meta = {
      props
    };

    this.props = this._makePropsProxy(props);
    this.children = children;

    this._eventBus = () => _eventBus;

    this._registerEvents(_eventBus);
    _eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(propsWithChildren: any = {}) {
    const props: Record<string, any> = {};
    const children: Record<string, any> = {};

    Object.entries(propsWithChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    })

    return {
      props,
      children
    }
  }

  private _addEvents() {
    const {events = {}} = this.props as { events: Record<string, () => void> }

    Object.keys(events).forEach(eventName => {
      this._element?.addEventListener(eventName, events[eventName]);
    })
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
 
  // Может переопределять пользователь, необязательно трогать
  protected init() { }

  private _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  public componentDidMount() { }

  public dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  // Может переопределять пользователь, необязательно трогать
  public componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  public setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public get element() {
    return this._element;
  }

  private _render() {
    const fragment = this._compile(this.render(), this.props);

    const newElement = fragment.firstElementChild as HTMLElement;
    
    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    
    //Наполнение компонента событиями путем навешивания обработчиков
    this._addEvents();
  }

  private _compile(template: string, context: any) {
    //template - это исходный hbs-код какой либо страницы

    const contextAndStubs = {...context, __refs: this.refs};
    const html = Handlebars.compile(template)(contextAndStubs);
    const temp = document.createElement('template');

    temp.innerHTML = html;

    //Проход по чилдренам и вызов для каждого чилдрена функцию embed,
    //которая меняет <div data-id=...></div> на конкретный контент компонента с нужным id
    contextAndStubs.__children?.forEach(({embed}: any) => {
      embed(temp.content);
    })

    return temp.content;
  }

  // Может переопределять пользователь, необязательно трогать
  protected render(): string { 
    return '';
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: any) {
    const self = this;

    const propsProxy = new Proxy(props, {
      get (target, prop) {
        const value = target[prop];
        if (typeof value === 'function') {
          return value.bind(target);
        } else {
          return value;
        }
      },
      set(target, prop, newValue) {
        console.log('set');
        console.log('target:', target);
        console.log('prop:', prop);
        console.log('newValue:', newValue);
        let oldTarget = {};
        oldTarget = Object.assign(oldTarget, target);
        target[prop] = newValue;
        self._eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true
      },
      deleteProperty() {
        throw new Error('Отказано в доступе');
      },
    });

    return propsProxy;
  }

  private _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }
}