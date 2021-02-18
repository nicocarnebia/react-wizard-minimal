import React from 'react';
import { Wizard, WizardSteps } from '../lib';
import Navigator from './Navigator';

const App = () => (
  <div>
    <Wizard>
      <WizardSteps>
        <div> page 1 </div>
        <div> page 2 </div>
        <div> page 3 </div>
        <div> page 4 </div>
      </WizardSteps>
      <Navigator />
    </Wizard>
  </div>
);

export default App;
