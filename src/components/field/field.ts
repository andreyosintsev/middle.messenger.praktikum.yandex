import Block from '../../utils/Block';

interface IFieldProps {
  title: string,
  name: string,
  type: string,
  value: string,
  error: string
}

export class Field extends Block {
  constructor(props: IFieldProps) {
    super(props);
  }

  protected render(): string {
    const { title, name, type, value, error } = this.props;

    return `<div class="field">
              <label class="label">${title}</label>
              <input class="input" name=${name} type=${type} value=${value}>
              <p class="error error_hidden">${error}</p>
            </div>`
  }
}