import Block from '../../utils/Block';

interface INumProps {
  num: string,
}

export class Num extends Block {
  constructor(props: INumProps) {
    super(props);
  }

  protected render(): string {
    const { num } = this.props;
    console.log('num', num);

    return `<div class="num">${num}</div>`
  }
}