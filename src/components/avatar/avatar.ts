import Block from '../../utils/Block';

interface IAvatarProps {
  img: string,
  onClick?: () => void
}

export class Avatar extends Block {
  constructor(props: IAvatarProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick
    }
  }

  protected render(): string {
    const { img } = this.props;

    return `<div class="avatar">
              <div class="avatar__image"><img src="${img}" alt="Аватар"></div>
            </div>`
  }
}