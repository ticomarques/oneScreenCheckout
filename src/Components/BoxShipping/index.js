import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material//RadioGroup';
import Radio from '@mui/material/Radio';
import Typography from "@mui/material/Typography";

export const BoxShipping = () => {
    return(
      <div className="payment box">
      <h2 className="subtitle">Shipping</h2>
      
      <RadioGroup
        row
        name="color"
        aria-label="color"
      >
        <FormControlLabel value="cartao" control={<Radio />} label="USPS" />
        <FormControlLabel value="boleto" control={<Radio />} label="USPS Express" />
        <FormControlLabel value="paypal" control={<Radio />} label="Direct" />
      </RadioGroup>
      
      <div className="shippingBox">
        <br />
        <Typography>Estimated delivery: 3 days.</Typography>
        <br />
        <br />
        <br />
      </div>
      
      <h2 className="subtitle">Payment</h2>
      <RadioGroup
        row
        name="color"
        aria-label="color"
      >
        <FormControlLabel value="cartao" control={<Radio />} label="Cartão Crédito" />
        <FormControlLabel value="boleto" control={<Radio />} label="Boleto" />
        <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
      </RadioGroup>
      
      <div className="creditCardBox">
        <TextField
          id="outlined-ccnumber-input"
          label="Credit card number"
          type="text"
          name="ccnumber"
          autoComplete="ccnumber"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      
      <TextField
        id="outlined-city-input"
        label="Expiration"
        type="text"
        name="city"
        autoComplete="city"
        margin="normal"
        variant="outlined"
        className="firstname"
      />
      
      <TextField
        id="outlined-zip-input"
        label="CVV"
        type="text"
        name="zip"
        autoComplete="zip"
        margin="normal"
        variant="outlined"
      />
        
      </div>
      </div>
    );
};