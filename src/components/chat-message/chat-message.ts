import Block from '../../utils/Block';

interface IChatMessageProps {
  image?: string,
  content?: string,
  alt: string,
  inOut: "inbox" | "outbox"
}

export class ChatMessage extends Block {
  constructor(props: IChatMessageProps) {
    super(props);
  }

  private _hasImage() { return !!(this.props.image && this.props.image.length > 0) }

  protected render(): string {
    const { image, content, inOut} = this.props;
    
    if (!inOut) { return `` };

    return `<div class="chat-message chat-message_${inOut}
              {{#if ${this._hasImage()}}}
                chat-message_image
              {{/if}}
            ">
              {{#if ${this._hasImage()}}}
                <img class="chat-message__image" src="../assets/${image}" alt="Изображение: ${content}">
              {{else}}
                ${content}
              {{/if}}
            </div>`;
  }
}
