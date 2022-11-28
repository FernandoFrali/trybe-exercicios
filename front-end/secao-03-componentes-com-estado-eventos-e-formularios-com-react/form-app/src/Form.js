import React from 'react';
import Email from './Email';
import Password from './Password';
import IdadeNCheck from './IdadeNCheck';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      senha: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Formulário React</h1>
        <form className="form">
          <Email value={this.state.email} handleChange={this.handleChange} />
          <Password value={this.state.senha} handleChange={this.handleChange} />
          <IdadeNCheck handleChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
