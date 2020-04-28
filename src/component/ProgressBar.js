import React from 'react';

const ProgressBar = (props) => {
    const {currentStep, totalStep, setCurrentStep, setForm, form} = props;

    const prevStep = () => {
        let stepPos = currentStep > 1 ? currentStep - 1 : 1
        setCurrentStep(stepPos);
    }

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
        if(currentStep < totalStep){return false;}
        setForm({
            ...form,
            isSubmit: true
        });
    }

    return (
        <div className="progress-container">
            <div className="progress-bar-content">
                <h4>{currentStep - 1} of {totalStep} filled</h4>
                <div className="progress-bar">
                    <div className="progress" style={{width: `${((currentStep - 1) / totalStep) * 100}%` }}></div>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li onClick={prevStep}>
                        <svg className="bi bi-file-arrow-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M4.646 7.854a.5.5 0 00.708 0L8 5.207l2.646 2.647a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M8 12a.5.5 0 00.5-.5v-6a.5.5 0 00-1 0v6a.5.5 0 00.5.5z" clipRule="evenodd"/>
                        </svg>
                    </li>
                    <li onClick={nextStep}>
                        <svg className="bi bi-file-arrow-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M4.646 8.146a.5.5 0 01.708 0L8 10.793l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M8 4a.5.5 0 01.5.5v6a.5.5 0 01-1 0v-6A.5.5 0 018 4z" clipRule="evenodd"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProgressBar;