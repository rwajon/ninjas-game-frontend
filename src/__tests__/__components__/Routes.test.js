import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import {
  BrowserRouter as Router,
  Switch,
  MemoryRouter
} from 'react-router-dom';
import Routes from '../../components/Routes';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Routes', () => {
  test('home page (/)', () => {
    const component = create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('home page (/home)', () => {
    const component = create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('game page (/game)', () => {
    const component = create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/game']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
