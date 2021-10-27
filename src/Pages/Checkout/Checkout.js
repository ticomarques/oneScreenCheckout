import styled from 'styled-components'
import Steps from '../../Components/Steps/Steps';
import { BoxPersonal } from '../../Components/BoxPersonal';
import { BoxShipping } from  '../../Components/BoxShipping';
import { BoxResume } from '../../Components/BoxResume';

import { useForm } from '../../Contexts/FormContext';

export const Checkout = () => {

  const { state } = useForm();

    return(
        <AppWrapper>
        <header>
          <h1 className="title">Checkout</h1>
          <Steps active={state.currentStep} />
        </header>

        <BoxWrapper>
          <BoxPersonal />
          <BoxShipping />
          <BoxResume />
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
  margin: 0 auto;
  & > div {
    border: 1px solid #eee;
    padding: 1rem 0.8rem;
    border-radius:5px;
  }
  .firstname{
    margin-right:10px;
  }
  .subtitle{
    text-align:center;
    margin:0;
  }
`