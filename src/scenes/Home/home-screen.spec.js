import React from 'react';
import HomeScreen from './home-screen';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

let mounted;
describe('Home screen', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  describe('Rendering', () => {
    it('should render the component', () => {
      mounted = mount(<HomeScreen />);

      // console.log(mounted.debug());
      expect(
        mounted.contains(
          <section>
            <h1>home_screen.title</h1>
          </section>,
        ),
      ).toBe(true);
    });
  });
});
