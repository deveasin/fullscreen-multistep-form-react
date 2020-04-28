const Step = (props) => {
    const {step, currentStep, children} = props;

    if(currentStep !== step){ return false }
    return children;
}

export default Step;