import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import SubmitBtn from './SubmitBtn';
import StepWrapper from './StepWrapper';
import Step from './Step';
import Success from './Success';

function App() {
  const [form, setForm] = useState({
    isSubmit: false,
    formsData: {}
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [totalStep, SetTotalStep] = useState(0);

  const changeHandler = (e) => {
    setForm({
      ...form,
      formsData: {
        ...form.formsData,
        [e.target.name]: e.target.value
      }
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
    if(currentStep < totalStep){return false;}
    setForm({
      ...form,
      isSubmit: true
    });
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="form-inputs">
          {form.isSubmit ? <Success
            setForm={setForm}
            setCurrentStep={setCurrentStep}
            formData={form.formsData} /> :
            <>
              <StepWrapper SetTotalStep={SetTotalStep} currentStep={currentStep}>
                <Step>
                    <label>What's your <strong>name</strong>?</label>
                    <input onChange={changeHandler} name="fullname" type="text" value={form.formsData['fullname'] ? form.formsData['fullname'] : ''} />
                    {form.formsData['fullname'] ? <SubmitBtn name="Ok" help /> : ''}
                </Step>
                <Step>
                  <label>What's you email <strong>address</strong>?</label>
                  <input onChange={changeHandler} type="email" name="email" value={form.formsData['email'] ? form.formsData['email'] : ''}/>
                  {form.formsData['email'] ? <SubmitBtn name="Ok" help /> : ''}
                </Step>
                <Step>
                  <label>What's you favourite <strong>quote</strong>?</label>
                  <textarea onChange={changeHandler} name="message" cols="30" rows="10" placeholder="Message" defaultValue={form.formsData['message'] ? form.formsData['message'] : ''}></textarea>
                  <SubmitBtn style={{textAlign: 'center'}} />
                </Step>
              </StepWrapper>
            </>
          }
        </div>
      </form>

      <ProgressBar currentStep={currentStep} totalStep={totalStep} setCurrentStep={setCurrentStep} setForm={setForm} form={form} />
    </div>
  );
}

export default App;
