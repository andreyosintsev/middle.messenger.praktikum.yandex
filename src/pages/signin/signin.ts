import Block from '../../utils/Block';

interface IPageSigninProps {
  
}

export class PageSignin extends Block {
  constructor(props: IPageSigninProps) {
    super(props);
  }

  // click() = {

  // }

  protected render(): string {
    return `<main class="signin-main">
              <div class="popup popup_signin">
                <h2 class="popup__title">Регистрация</h2>
                <form>
                  {{{ Field title="Почта" name="email" type="text" value="pochta@yandex.ru" error="Неверный email" }}}
                  {{{ Field title="Логин" name="login" type="text" value="Логин" error="Неверный логин" }}}
                  {{{ Field title="Имя" name="first_name" type="text" value="Андрей" error="Неверное имя" }}}
                  {{{ Field title="Фамилия" name="second_name" type="text" value="Осинцев" error="Неверная фамилия" }}}
                  {{{ Field title="Телефон" name="phone" type="tel" value="+7(909)9673030" error="Неверный телефон" }}}
                  {{{ Field title="Пароль" name="password" type="password" value="Пароль" error="Неверный пароль" }}}
                  {{{ Field title="Пароль (еще раз)" name="password" type="password_again" value="Пароль" error="Пароли не совпадают" }}}
                  {{{ Spacer height="50" }}}
                  {{{ Button value="Зарегистрироваться" }}}
                  {{{ Link href="" text="Войти" }}}
                </form>
              </div>
            </main>`
  }
}