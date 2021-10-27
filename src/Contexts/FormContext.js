/* 1-Context, 2-Reducer, 3-Provider, 4-Hook */
import {createContext, useContext, useReducer } from 'react';

const initialData = {
    currentStep: 0,
    name: '',
    lastName: '',
    email: '',
    address: '',
    complement: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    phone: '',
    payment: {
      typePayment: '',
      NO: '',

    },
    shipping: {
      type_shipping: '',
      idShipping : ''
    },
    item: '',
    amount: '',
    price: '',
    obs: ''
  };

// 1- Context
const FormContext = createContext(undefined);

// 2- Reducer
const formReducer = (state, action) => {
    switch(action.type) {
        case "setCurrentStep" :
            return {...state, currentStep: action.payload};
        default :
            return state;
    }
};

// 3 - Provider
export const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch};
    
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

// 4 - Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
};