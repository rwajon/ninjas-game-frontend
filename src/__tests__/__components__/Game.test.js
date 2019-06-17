import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Game from '../../components/Game/Game';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Game', () => {
  test('game', () => {
    const component = create(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const rootInstance = component.root;
    const form = rootInstance.findByType('form');
    form.props.onSubmit({
      preventDefault: () => console.log('preventDefault'),
      target: {
        answer: {
          value: 'Kigali'
        }
      }
    });
    // expect(component.toJSON()).toMatchSnapshot();
  });
  // test('home page (/home)', () => {
  //   const component = create(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={['/home']}>
  //         <Game />
  //       </MemoryRouter>
  //     </Provider>
  //   );
  //   expect(component.toJSON()).toMatchSnapshot();
  // });

  // test('game page (/game)', () => {
  //   const component = create(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={['/game']}>
  //         <Game />
  //       </MemoryRouter>
  //     </Provider>
  //   );
  //   expect(component.toJSON()).toMatchSnapshot();
  // });
});
