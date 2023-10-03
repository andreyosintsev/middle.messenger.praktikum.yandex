import Handlebars from "handlebars";
import Block from "./Block";
import { HelperOptions } from "handlebars";


//Функция служит для регистрации в Handlebars хелпер-функции, которая описывает компонент
export function registerComponent(name: string, Component: typeof Block) {
  if (name in Handlebars.helpers) {
    throw new Error('Компонент с таким именем уже зарегистрирован');
  }

  //Функция описывает то, как Handlebars будет отрисовывать компонент 
  //Задача функции - создать компонент и его проинициализировать данными и вернуть разметку
  Handlebars.registerHelper(name, function(this: unknown, { hash, data, fn }: HelperOptions) {
    
    //hash - это объект с пропсами { имя_пропса: значение, имя_проса: значение... }
    //data - это данные, те же пропсы, которые "не торчат наружу" и передаются во вложенные области видимости
    //fn - функция рисования компонента, которая позволяет получить HTML разметку используя контекст this

    const component = new Component(hash);                //Создается новый компонент - наследник базового класса Block с пропсами из hash

    //component - это HTML-разметка блока, поскольку конструктор new вызывает _render(), который возвращает разметку на основе скомпилированного hbs-шаблона и пропсов

    const dataAttribute = `data-id="${component.id}"`;    //Формируется дата-атрибут, чтобы можно было связать компонент и разметку

    if ('ref' in hash) {        //Если среди пропсов есть ref-ссылка на какой-либо ... (чего?)
      (data.root.__refs = data.root.__refs || {})[hash.ref] = component;  //Помещаем в data.root.__refs ссылку на данный компонент (зачем?)
                                                                          //hash.ref - название компонента
    }

    //Работа с children

    (data.root.__children = data.root.__children || []).push({          //Если есть children, он их добавляет
      component,
      //embed() служит для замены <div data-id=...></div> на контент соответствующего блока
      embed(fragment: DocumentFragment) {
        const stub = fragment.querySelector(`[${dataAttribute}]`);      //Если есть children внутри, то их надо подменить этой функцией

        if (!stub) {
          return;
        }

        component.getContent()?.append(...Array.from(stub.childNodes)); //childNodes - возвращает коллекцию дочерних элементов элементов stub

        stub.replaceWith(component.getContent()!);                      //...и заменяет их контент на <div data-id = component_id></div>
          //В дальнейшем по id будет произведена замена на блок с разметкой и событиями
      }
    })

    const contents = fn ? fn(this) : '';                // Здесь вернется HTML-разметка при помощи функции fn и контекста this

    return `<div ${dataAttribute}>${contents}</div>`;  // Выведем HTML-разметку и data-id = id компонента, сгенерированный при помощи nanoid() в конструкторе компонента
  })
}
