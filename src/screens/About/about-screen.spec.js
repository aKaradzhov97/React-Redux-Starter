import React from 'react';
import { render, screen } from '../../tests/test-utils';
import AboutScreen from './about-screen';

describe('AboutScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<AboutScreen />, { initialState });

      expect(container.querySelector('body section')).toMatchSnapshot();
    });
  });
});
