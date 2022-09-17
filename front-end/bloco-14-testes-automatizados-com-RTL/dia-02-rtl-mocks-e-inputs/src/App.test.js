import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );

});

it ('button new joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  const joke2 = {
    id: 'aaa',
    joke: 'I asked a frenchman if he played video games. He said "Wii"',
    status: 200,
  };
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });
  render(<App />)
  const btnNewJoke = await screen.findByRole('button');
  expect(btnNewJoke).toBeInTheDocument();
  expect(await screen.findByText(joke.joke)).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke2),
  });

  userEvent.click(btnNewJoke);
  expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
})
