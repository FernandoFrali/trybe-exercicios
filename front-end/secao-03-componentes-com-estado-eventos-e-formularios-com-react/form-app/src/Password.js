import React from 'react';

function Password({ value, handleChange }) {
  let error = undefined;
  if (value.length < 8) error = '*Senha deve ter mais de 8 caracteres';
  return (
    <>
      <label>
        Digite sua senha:
        <input
          type="password"
          name="senha"
          placeholder="senha"
          onChange={handleChange}
        ></input>
        <span>{error ? error : ''}</span>
      </label>
    </>
  );
}

export default Password;
