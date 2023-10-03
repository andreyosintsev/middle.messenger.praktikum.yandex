import Block from '../../utils/Block';

interface IDatalinkProps {
  href: string,
  text: string,
  color: string
}

export class Datalink extends Block {
  constructor(props: IDatalinkProps) {
    super(props);
  }

  protected render(): string {
    const { href, text, color } = this.props;

    return `<div class="userdata-line">
              <a class="userdata-link" href=${href} title="${text}" style="color: ${color}">${text}</a>
            </div>`;
  }
}
