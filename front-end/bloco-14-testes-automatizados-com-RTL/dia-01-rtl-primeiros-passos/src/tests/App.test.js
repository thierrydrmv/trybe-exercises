import { render, screen,  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe("Tela de inserção de email", () => {
  it('Verifica se existe um imput de email na tela', () => {
    // acessar os elementos da tela
    render(<App />)
  
    // fazer os testes
    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it('Verifica se existe dois botões na tela', () => {
    render(<App />)
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  })
  
  it('Verifica se existe o botão de enviar na tela', () => {
    render(<App />)
    const btnSend = screen.getByTestId("id-send");
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button')
    expect(btnSend).toHaveValue("enviar");
  })
  
  it('Verifica que, ao digitar o email e clicar em "Enviar", o email é renderizado', () => {
    // acessar os elementos da tela
    render(<App />)
    
    const EMAIL_USER = 'test@gmail.com';

    const inputEmail = screen.getByLabelText(/email/i);
    const btn = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');
    // interagir com os elementos (caso seja necessario)
    userEvent.type(inputEmail, "test@gmail.com");
    userEvent.click(btn);
    // fazer os testes
    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`)
  })
})

  // acessar os elementos da tela

  // interagir com os elementos (caso seja necessario)

  // fazer os testes