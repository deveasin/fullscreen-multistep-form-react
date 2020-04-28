import React, { useEffect } from 'react';

const Success = ({formData, setForm, setCurrentStep, SetTotalStep}) => {
    const formKeys = Object.keys(formData);
    useEffect(() => {
        setTimeout(() => {
            setForm({
                isSubmit: false,
                formsData: {}
            });
            setCurrentStep(1);
        }, 1000)
    });
    return (
        <div className="form-success-page">
            <h1>You have successfully submitted your form.</h1>
            {
                formKeys.length ? 
                    <ul>
                        {formKeys.map(key => {
                            return <li key={key}>{`${key[0].toUpperCase() + key.slice(1)}: ${formData[key]}`}</li>
                        })}
                    </ul>
                : ''
            }
        </div>
    )
}

export default Success;