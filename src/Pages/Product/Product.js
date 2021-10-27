import { Fragment } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; 

export const Product = () => {
    return(
        <div>
            <Fragment>
                <Box>

                    <Link to="/checkout">Checkout</Link>
                  
                </Box>
            </Fragment>
          </div>
    );
};