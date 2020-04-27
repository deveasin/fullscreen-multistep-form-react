import React, {useEffect, useState, useRef} from 'react';

const Step = (props) => {
    const [count, setCount] = useState(1);

    const {step, currentStep, children, SetTotalStep} = props;
    
    const countRef = useRef(count);

    useEffect(() => {
        
        countRef.current = count + 1;
        setCount(count + 1);
        SetTotalStep(countRef.current + 1);
    }, []);

    if(currentStep != step){ return false }
    return children;
}

export default Step;