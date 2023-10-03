import Block from '../../utils/Block';

interface IPageLoginProps {
  
}

export class PageLogin extends Block {
  constructor(props: IPageLoginProps) {
    super(props);
  }

  // click() = {

  // }

  protected render(): string {
    return `<main class="login-main">
              <div class="popup popup_login">
                <h2 class="popup__title">Вход</h2>
                  <form>
                    {{{ Field title="Логин" name="login" type="text" value="Логин" error="Неверный логин" }}}
                    {{{ Field title="Пароль" name="password" type="password" value="Пароль" error="Неверный пароль" }}}
                    {{{ Spacer height="150" }}}
                    {{{ Button value="Войти" onClick=Button.click }}}
                    {{{ Link href="" text="Ещё не зарегистрированы?" }}}
                  </form>
              </div>
            </main>`
  }
}
