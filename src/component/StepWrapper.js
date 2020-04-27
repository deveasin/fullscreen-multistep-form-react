import React, { useEffect } from 'react';

const StepWrapper = (props) => {
    const { SetTotalStep, currentStep} = props;

    useEffect(() => {
        SetTotalStep(props.children.length)
    }, []);

    return React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {step: index + 1, currentStep});
    })
}

export default StepWrapper;