import Block from '../../utils/Block';

interface ILinkProps {
  href: string,
  text: string
}

export class Link extends Block {
  constructor(props: ILinkProps) {
    super(props);
  }

  protected render(): string {
    const { href, text } = this.props;

    return `<a class="link" href="${href}">${text}</a>`
  }
}
