import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Não mostrar a mensagem caso o email ainda não tenha sido enviado', () => {
  render(<ValidEmail email='' />)
  const valid = screen.queryByTestId("email-valid")
  expect(valid).not.toBeInTheDocument();
})