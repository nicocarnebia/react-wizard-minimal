import PropTypes from "prop-types";
import React, {useContext, useEffect} from 'react';
import WizardContext from './wizardContext';

const WizardSteps = ({ children }) => {
  const { currentIndex, setTotalSteps } = useContext(WizardContext);
  const steps = React.Children.toArray(children);
  const currentStep = steps[currentIndex];

  useEffect(() => {
    setTotalSteps(steps.length);
  });
  
  return (
    <>
      {currentStep}
    </>
  );
};

WizardSteps.propTypes = {
  children: PropTypes.array.isRequired,
}

export default WizardSteps;
