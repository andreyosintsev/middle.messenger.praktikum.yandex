import Block from '../../utils/Block';

interface IDatalineProps {
  key: string,
  value: string
}

export class Dataline extends Block {
  constructor(props: IDatalineProps) {
    super(props);
  }

  protected render(): string {
    const { key, value } = this.props;

    return `<div class="userdata-line">
              <div class="userdata-line__key">${key}</div>
              <div class="userdata-line__value">${value}</div>
            </div>`;
  }
}
