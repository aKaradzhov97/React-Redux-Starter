import React from 'react';
import AppHeader from './app-header';
import { act, create } from 'react-test-renderer';

let root;
describe('App Header component', () => {
  beforeEach(() => {
    act(() => {
      root = create(<AppHeader />);
    });
  });

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(root.toJSON()).toMatchSnapshot();
    });
  });
});
