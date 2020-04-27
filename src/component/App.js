import React, { useState } from 'react';
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
    if(currentStep < totalStep){
      setCurrentStep(currentStep + 1);
      return false;
    }
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
              <Step step="1" currentStep={currentStep} SetTotalStep={SetTotalStep}>
                  <input onChange={changeHandler} name="fullname" type="text" placeholder="Full Name"/>
              </Step>
              <Step step="2" currentStep={currentStep} SetTotalStep={SetTotalStep}>
                <input onChange={changeHandler} type="email" name="email" placeholder="Email Address"/>
              </Step>
              <Step step="3" currentStep={currentStep} SetTotalStep={SetTotalStep}>
                <textarea onChange={changeHandler} name="message" cols="30" rows="10" placeholder="Message"></textarea>
                <input type="submit"/>
              </Step>
            </>
          }
        </div>
      </form>
    </div>
  );
}

export default App;
