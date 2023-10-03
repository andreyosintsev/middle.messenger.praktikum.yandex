import Block from '../../utils/Block';

interface IButtonProps {
  value: string,
  onClick?: () => void
}

export class Button extends Block {
  constructor(props: IButtonProps) {
    super(props);
    this.props.events = {
      onClick: this.props.onClick
    }
  }

  protected render(): string {
    const { value } = this.props;

    return `<input class="submit" type="submit" value="${value}" />`
  }
}