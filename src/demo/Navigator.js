import React from 'react';
import { useWizardContext } from '../lib';

const Navigator = () => {
    const { 
      goToNextStep,
      goToPrevStep,
      currentStepNumber
    } = useWizardContext();
    return (
      <div>
        <button onClick={goToNextStep}>Go next step</button>
        <div>{currentStepNumber}</div>
        <button onClick={goToPrevStep}>Go previous step</button>
      </div>
    );
};

export default Navigator;
