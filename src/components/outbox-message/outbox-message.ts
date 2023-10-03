import Block from '../../utils/Block';

interface IOutboxMessageProps {
  image?: string,
  content?: string,
  alt: string
}

export class OutboxMessage extends Block {
  constructor(props: IOutboxMessageProps) {
    super(props);
  }

  protected render(): string {
    const { image, content, alt } = this.props;

    return `<div class="outbox-message 
              {{#if ${image}}}
                outbox-message_image
              {{/if}}
            ">
              {{#if ${content}}}
                ${content}
              {{/if}}
              {{#if ${image}}}
                <img class="outbox-message__image" src="${image}" alt="${alt}">
              {{/if}}
            </div>`;
  }
}
