import { FormProvider } from './Contexts/FormContext';
import { Router } from './Router';



function App() {
  return (
    <FormProvider>
      <Router />
  </FormProvider>
  );
}



export default App;
