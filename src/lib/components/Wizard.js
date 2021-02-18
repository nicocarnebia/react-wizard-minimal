import React, { useState, useCallback } from 'react';
import WizardContext from './wizardContext';

const Wizard = ({children}) => {
    const [currentIndex, setIndex] = useState(0);
    const [totalSteps, setTotalSteps] = useState(0);

    const increaseIndex = useCallback(() => 
      (currentIndex < totalSteps - 1 && setIndex(currentIndex + 1)), [currentIndex, totalSteps]);
    const decreaseIndex = useCallback(() => (currentIndex > 0 && setIndex(currentIndex - 1)), [currentIndex]);

    const context = {
        totalSteps,
        setTotalSteps,
        currentIndex,
        setIndex,
        increaseIndex,
        decreaseIndex,
    };

    return (
      <WizardContext.Provider value={context}>
        <div>
          {children}
        </div>
      </WizardContext.Provider>
    );
};

export default Wizard;
