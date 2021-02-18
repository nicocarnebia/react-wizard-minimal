import { useContext } from 'react';
import WizardContext from './wizardContext';

const useWizardContext = () => {
  const {
    currentIndex,
    setIndex,
    increaseIndex,
    decreaseIndex,
  } = useContext(WizardContext);

  return {
    currentStepNumber: currentIndex,
    moveToStep: setIndex,
    goToNextStep: increaseIndex,
    goToPrevStep: decreaseIndex,
  };
};

export default useWizardContext;
