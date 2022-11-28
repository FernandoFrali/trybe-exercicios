import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <>
        <label>Digite seu email:</label>
        <input
          type="email"
          value={value}
          autoFocus
          required
          placeholder="email"
          name="email"
          onChange={handleChange}
        ></input>
        <label>Confirme seu email:</label>
        <input
          autoComplete="off"
          type="email"
          autoFocus
          required
          placeholder="email"
          name="email-confirm"
          onChange={handleChange}
        ></input>
      </>
    );
  }
}

export default Email;
