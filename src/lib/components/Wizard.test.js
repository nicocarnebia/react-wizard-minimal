import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wizard from './Wizard';

configure({ adapter: new Adapter() });

describe('Wizard', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Wizard />);
    expect(wrapper.length).toBe(1);
  });
});
