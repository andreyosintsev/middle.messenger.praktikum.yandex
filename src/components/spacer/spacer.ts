import Block from '../../utils/Block';

interface ISpacerProps {
  height: number
}

export class Spacer extends Block {
  constructor(props: ISpacerProps) {
    super(props);
  }

  protected render(): string {
    const { height } = this.props;

    return `<div class="spacer" style="height: ${height}px"></div>`
  }
}
