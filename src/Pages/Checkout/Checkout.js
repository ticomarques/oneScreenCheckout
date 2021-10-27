import * as React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import Steps from '../../Components/Steps/Steps';
import { BoxPersonal } from '../../Components/BoxPersonal';
import { BoxShipping } from  '../../Components/BoxShipping';
import { BoxResume } from '../../Components/BoxResume';


import { useForm } from '../../Contexts/FormContext';

const steps = ['Personal info', 'Shipping and Payment', 'Resume'];

export const Checkout = () => {

  const { state, dispatch } = useForm();
  const activeStep = state.currentStep;
  const history = useHistory();
  
  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const setActiveStep = (step) => {
    dispatch({
      type: 'setCurrentStep',
      payload: step
    });
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() 
        ?  activeStep
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleConclusion = () => {
    history.push('/end');
  }

    return(
        <AppWrapper>
        <header>
          <h1 className="title">Checkout</h1>
          <Steps 
            steps={steps} 
            activeStep={state.currentStep} 
            handleStep={handleStep}
          />
        </header>

        <BoxWrapper>
          <BoxPersonal 
            activeStep={state.currentStep}
            handleNext={handleNext}
          />
          <BoxShipping 
            activeStep={state.currentStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
          <BoxResume 
            activeStep={state.currentStep}
            handleBack={handleBack}
            handleConclusion={handleConclusion}
          />
        </BoxWrapper>
      </AppWrapper>
    );
};

const AppWrapper = styled.div`
    .title {
    text-align:center;
    }

    .icons {
    display:flex;
    justify-content:space-between;
    list-style:none;
    }
`

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
  width:1300px;
  margin: 50px auto 40px;
  & > div {
    border: 1px solid #eee;
    padding: 1rem 0.8rem;
    border-radius:5px;
    opacity: 0.4;
  }
  .active {
    box-shadow: 0 0 5px gray;
    opacity: 1;
  }
  .firstname{
    margin-right:10px;
  }
  .subtitle{
    text-align:center;
    margin:0;
  }
`