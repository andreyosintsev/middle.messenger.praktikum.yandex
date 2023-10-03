import Block from '../../utils/Block';

interface IInboxMessageProps {
  image?: string,
  content?: string,
  alt: string
}

export class InboxMessage extends Block {
  constructor(props: IInboxMessageProps) {
    super(props);
  }

  protected render(): string {
    const { image, content, alt } = this.props;

    return `<div class="inbox-message 
              {{#if ${image}}}
                inbox-message_image
              {{/if}}
            ">
              {{#if ${content}}}
                ${content}
              {{/if}}
              {{#if ${image}}}
                <img class="inbox-message__image" src="${image}" alt="${alt}">
              {{/if}}
            </div>`;
  }
}
