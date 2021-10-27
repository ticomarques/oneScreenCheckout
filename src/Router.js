import { BrowserRouter, Route} from 'react-router-dom';
import { Product } from './Pages/Product/Product';
import { Checkout } from './Pages/Checkout/Checkout';

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Product} exact />
            <Route path="/checkout" component={Checkout} />
        </BrowserRouter>
    );
};