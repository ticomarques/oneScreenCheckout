import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const BoxPersonal = ({activeStep, handleNext}) => {
    return(
        <div className={activeStep === 0 ? 'personal box active' : 'personal box'}>
          <h2 className="subtitle">Personal info</h2>

          <TextField
            id="outlined-name-input"
            label="Name"
            type="text"
            name="name"
            autoComplete="name"
            margin="normal"
            variant="outlined"
            className="firstname"
          />
          <TextField
            id="outlined-lastname-input"
            label="Last name"
            type="text"
            name="lastname"
            autoComplete="lastname"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="email"
            type="text"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-address-input"
            label="Address"
            type="text"
            name="address"
            autoComplete="address"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-address2-input"
            label="Address complement"
            type="text"
            name="address2"
            autoComplete="address2"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-country-input"
            label="Country"
            type="text"
            name="country"
            autoComplete="country"
            margin="normal"
            variant="outlined"
            className="firstname"
          />
          <TextField
            id="outlined-state-input"
            label="State"
            type="text"
            name="state"
            autoComplete="state"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-city-input"
            label="City"
            type="text"
            name="city"
            autoComplete="city"
            margin="normal"
            variant="outlined"
            className="firstname"
          />
          <TextField
            id="outlined-zip-input"
            label="Zip code"
            type="text"
            name="zip"
            autoComplete="zip"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-phone-input"
            label="Phone"
            type="text"
            name="phone"
            autoComplete="phone"
            margin="normal"
            variant="outlined"
            fullWidth
          />    

          <div>
            <Fragment>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  

                  <Box sx={{ flex: '1 1 auto' }} />
                  
                  <Button 
                    onClick={handleNext} 
                    sx={{ mr: 1 }}
                    disabled={activeStep > 0}
                  >
                    Next
                  </Button>
                  
                </Box>
            </Fragment>
          </div>
        </div>
    )
}