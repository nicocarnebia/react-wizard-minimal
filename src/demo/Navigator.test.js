import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigator from './Navigator';
import WizardContext from '../lib/components/wizardContext';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<WizardContext.Provider value={{}}><Navigator/></WizardContext.Provider>);
  expect(wrapper.length).toBe(1);
});
