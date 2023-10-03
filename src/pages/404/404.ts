import Block from '../../utils/Block';

interface IPage404Props {

}

export class Page404 extends Block {
  constructor(props: IPage404Props) {
    super(props);
  }

  protected render(): string {
    return `<main class="error-main">
              <h1 class="title">404</h1>
              <h2>Не туда попали</h2>
                {{{Spacer height="50"}}}
                {{{Link href="" text="Назад к чатам"}}}
            </main>`
  }
}