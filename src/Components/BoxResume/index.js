import { Fragment } from 'react';
import Box from '@mui/material/Box';

import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export const BoxResume = ({activeStep, handleBack, handleConclusion}) => {
    return(
      <div className={activeStep === 2 ? 'resume box active' : 'resume box'}>
        <h2 className="subtitle">Resume</h2>
        <Typography>Finalize sua compra</Typography>




        <div>
            <Fragment>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  
                  <Button
                    color="inherit"
                    disabled={activeStep < 2}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back 
                  </Button>

                  <Box sx={{ flex: '1 1 auto' }} />
                  
                  <Button 
                    onClick={handleConclusion} 
                    disabled={activeStep < 2}
                    sx={{ mr: 1 }}>
                    Finish
                  </Button>
                  
                </Box>
            </Fragment>
          </div>

      </div>
    );
};