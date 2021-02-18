# react-wizard-minimal
A simple wizard for react using hooks. 

- Easy to use components for simple integration
- Available custom hook for easy access to wizard config/properties
 - ~~Navigation Bar~~
 - ~~Included styles~~

## Example usage
  
  Wrap your components with `Wizard` and `WizardSteps` components:
  ```JSX
const  App  = () => (
<div>
	<Wizard>
		<WizardSteps>
			<div> page 1 </div>
			<div> page 2 </div>
			<div> page 3 </div>
			<div> page 4 </div>
		</WizardSteps>
	</Wizard>
</div>
);
  ```

Include `useWizardContext` hook to get access to the wizard controls:
```JSX
const {
	goToNextStep,
	goToPrevStep,
	currentStepNumber,
	moveToStep,
} =  useWizardContext();
```
Then use controls to navigate through components.
### Navigator Example
```JSX
const  Navigator  = () => {
	const {
		goToNextStep,
		goToPrevStep,
		currentStepNumber
	} =  useWizardContext();
	return (
		<div>
			<button  onClick={goToNextStep}>Go next step</button>
			<div>{currentStepNumber}</div>
			<button  onClick={goToPrevStep}>Go previous step</button>
		</div>
	);
};
```