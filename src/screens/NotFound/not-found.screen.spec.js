import React from 'react';
import NotFoundScreen from './not-found.screen';
import { render } from '../../tests/test-utils';

describe('NotFoundScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<NotFoundScreen />, { initialState });

      expect(container.querySelector('body section')).toMatchSnapshot();
    });
  });
});
