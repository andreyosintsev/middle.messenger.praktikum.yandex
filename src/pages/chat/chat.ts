import Block from '../../utils/Block';

interface IPageChatProps {
  
}

export class PageChat extends Block {
  constructor(props: IPageChatProps) {
    super(props);
  }

  // click() = {

  // }

  protected render(): string {
    return `<main class="chat-main">
              <div class="chat-list">
                <div class="chat-list__header">
                  <div class="breadcrumb">
                    <a class="breadcrumb__link" href="">
                      Профиль
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Перейти в профиль."><path d="M1 9L5 5L1 1" stroke="#999999"/></svg>
                    </a>
                  </div>
                  <div class="search">
                    <input class="search__input" type="text" name="search" value="Поиск">
                  </div>
                </div>
                <div class="chat-contacts">
                  <ul class="chat-contacts-list">
                    <li>
                      {{{ ChatContact name="Андрей" reply="" message="Изображение" time="10:49" num="1" }}}
                      {{{ ChatContact name="Киноклуб" reply="Вы" message="стикер" time="12:00" num="2" }}}
                      {{{ ChatContact name="Илья" reply="" message="Друзья, у меня для вас особенный выпуск новостей!" time="15:12" num="3" }}}
                      {{{ ChatContact name="Вадим" reply="Вы" message="Круто!" time="Пт" num="4" current = true }}}
                      {{{ ChatContact name="тет-а-теты" reply="" message="И Human Interface Guidelines и Material Design рекомендуют" time="Ср" num="5" }}}
                      {{{ ChatContact name="1, 2, 3" reply="" message="Миллионы россиян ежедневно проводят десятки часов свое" time="Пн" num="6" }}}
                      {{{ ChatContact name="Design Destroyer" reply="" message="В 2008 году художник Jon Rafman  начал собирать всякую фигню" time="Пн" num="7" }}}
                      {{{ ChatContact name="Day." reply="" message="Так увлёкся работой по курсу, что совсем забыл его анонсировать." time="1 Мая 2020" num="8" }}}
                      {{{ ChatContact name="Стас Рогозин" reply="" message="Можно или сегодня или завтра вечером." time="12 Апр 2020" num="9" }}}
                      {{{ ChatContact name="Босоногий Геннадий" reply="" message="Приходите ко мне вечером смотреть новый сезон сериала Чернобыль" time="Пн" num="10" }}}
                      {{{ ChatContact name="Витаминка" reply="Вы" message="Ты - вся моя любовь. С первым апреля!" time="1 Апр 2020" num="11" }}}
                      {{{ ChatContact name="Несчастлиffчик" reply="" message="Угораздило же меня родиться 29 февраля." time="29 Фев 2020" num="12" }}}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="chat-content">
                <div class="chat-header">
                  <div class="chat-user">
                    <div class="chat-user__avatar">
            
                    </div>
                    <div class="chat-user__name">
                      Вадим
                    </div>
                  </div>
                  <nav class="chat-menu"></nav>
                </div>
                <div class="chat-date">
                  19 июня
                </div>
                <div class="chat-messages">
                  {{{ InboxMessage content = "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро." time="11:56" }}}
                  {{{ InboxMessage image = "../../../public" time="11:57" alt="Фотоаппарат Хассельблад" }}}
                  {{{ OutboxMessage content = "Круто!" time="12:0" read="true" }}}
                </div>
                <div class="chat-footer">
                  <div class="chat-footer__attach"></div>
                  <form class="chat-footer__form">
                    <input class="chat-footer__text" name="message" type="text" placeholder="Введите сообщение" value="" />
                  </form>
                  <div class="chat-footer__send"></div>
                </div>
              </div>
            </main>`
  }
}
