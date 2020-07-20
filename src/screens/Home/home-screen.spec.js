import React from 'react';
import { render, screen } from '../../tests/test-utils';
import HomeScreen from './home-screen';

describe('HomeScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<HomeScreen />, { initialState });

      expect(container.querySelector('body section')).toMatchSnapshot();
    });
  });
});
