import Block from '../../utils/Block';

interface IChatContactProps {
  current?: boolean | false,
  name: string,
  reply?: string,
  message: string,
  time: string,
  num?: string
}

export class ChatContact extends Block {
  constructor(props: IChatContactProps) {
    super(props);
  }

  private _hasReply() { return !!this.props.reply };

  private _hasNum() { return !!(this.props.num && this.props.num > 0) };

  protected render(): string {
    const { current, name, reply, message, time, num } = this.props;

    return `<div class="chat-contact
              {{#if ${current}}}
                chat-contact_current
              {{/if}}
              "
            >
              <div class="chat-contact-user-data">
                <div class="chat-contact-user-data__avatar"></div>
                <div class="chat-contact-user-data__last-message">
                  <div class="chat-contact-user-name">
                    ${name}
                  </div>
                  <div class="chat-contact-user-message">
                    {{#if ${this._hasReply()}}}
                      <div class="chat-contact-user-reply">
                        ${reply}:
                      </div>
                    {{/if}}
                    ${message}
                  </div>
                </div>
              </div>
            <div class="chat-contact-message-info">
              <div class="chat-contact-message-info__time">
                ${time}
              </div>
              {{#if ${this._hasNum()}}}
                {{{ Num num = "${num}" }}}
              {{/if}}
            </div>
          </div>`;
  }
}
