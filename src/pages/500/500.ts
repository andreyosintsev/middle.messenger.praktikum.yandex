import Block from '../../utils/Block';

interface IPage500Props {

}

export class Page500 extends Block {
  constructor(props: IPage500Props) {
    super(props);
  }

  protected render(): string {
    return `<main class="error-main">
              <h1 class="title">500</h1>
              <h2>Мы уже чиним, зайдите попозже</h2>
              {{{ Spacer height="50"}}}
              {{{ Link href="" text="Назад к чатам"}}}
            </main>`
  }
}