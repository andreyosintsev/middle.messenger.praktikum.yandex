import Block from '../../utils/Block';

import { IContactList, IMessageList } from '../../utils/Intefaces';

interface IPageChatProps {
  contactList: IContactList,
  messageList: IMessageList
}

export class PageChat extends Block {
  constructor(props: IPageChatProps) {
    super(props);
  }

  // click() = {

  // }

  protected render(): string {

    const { contactList, messageList } = this.props;
    
    console.log('PROPS');
    console.log(this.props);
    console.dir(contactList);
    console.log('MESSAGELIST');
    console.dir(messageList);

    // contactList.forEach((el: IContact) => console.log(el.name));
    //const contactList = [1, 2, 3];

    // export interface IContact {
    //   name: string,
    //   avatar?: string,
    //   reply?: IContact,
    //   lastMessage?: IMessage,
    //   num?: number,
    //   current?: boolean
    // }

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
                    {{#each contactList}}
                      <li>
                          {{{ChatContact 
                                name = this.name
                                reply = this.reply.name
                                message = this.lastMessage.content
                                time = this.lastMessage.time
                                num = this.num
                                current = this.current
                          }}}
                        </li>
                    {{/each}}
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
                  <ul class="chat-messages-list">
                    {{#each messageList}}
                      <li class="chat-messages-list-item">
                          {{{ChatMessage
                            inOut = this.inOut
                            content = this.content
                            image = this.image
                            time = this.time
                          }}}
                      </li>
                    {{/each}}
                  </ul>
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
