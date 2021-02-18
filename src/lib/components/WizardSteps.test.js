import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WizardSteps from './WizardSteps';
import WizardContext from './wizardContext';

configure({ adapter: new Adapter() });

describe('WizardSteps', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<WizardContext.Provider value={{}}>
        <WizardSteps children={[]} />
      </WizardContext.Provider>);
    expect(wrapper.length).toBe(1);
  });
});
