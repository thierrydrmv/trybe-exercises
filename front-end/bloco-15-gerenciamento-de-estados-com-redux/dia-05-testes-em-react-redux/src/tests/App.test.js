import renderWithRedux from './renderWithRedux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('testing clicks', () => {
  it('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('+');
    const buttonDiminuir = screen.queryByText('-');

    expect(buttonDiminuir).toBeInTheDocument();
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();

  });
  it('a click in a button should change the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
    
    const value = screen.getByTestId('counter');

    expect(value.innerHTML).toBe('5');
  });

  it('testing buttons', async () => {
    renderWithRedux(<App />)
    const buttonAdicionar = screen.getByTestId('plus');
    const buttonDiminuir = screen.getByTestId('minus');
    const value = screen.getByTestId('counter');

    expect(value.innerHTML).toBe('0')
    await userEvent.click(buttonAdicionar)
    expect(value.innerHTML).toBe('1')
    await userEvent.click(buttonDiminuir)
    await userEvent.click(buttonDiminuir)
    expect(value.innerHTML).toBe('-1')
  })

  it('a click in the plus button should change the value to 11', async () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const buttonAdicionar = screen.getByTestId('plus');

    await userEvent.click(buttonAdicionar)
    const value = screen.getByTestId('counter');

    expect(value.innerHTML).toBe('11');
  });
});
