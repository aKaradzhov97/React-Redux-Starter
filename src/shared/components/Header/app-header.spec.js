import React from 'react';
import AppHeader from './app-header';
import { render } from '../../../tests/test-utils';

describe('AppHeader', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const { container } = render(<AppHeader />);

      expect(container.querySelector('body section')).toMatchSnapshot();
    });
  });
});
