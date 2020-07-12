import React from 'react';
import NotFoundScreen from './not-found.screen';
import { act, create } from 'react-test-renderer';

let root;
describe('Not Found screen', () => {
  beforeEach(() => {
    act(() => {
      root = create(<NotFoundScreen />);
    });
  });

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(root.toJSON()).toMatchSnapshot();
    });
  });
});
