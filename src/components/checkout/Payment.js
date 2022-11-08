import { useEffect } from "react";

// Mui
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

//
import { BASE_URL } from "../../constants";
import useHttp from "../../hooks/useHttp";

const { REACT_APP_API_KEY } = process.env;

// Main component
const Payment = ({ paymentId, setPaymentId }) => {
  const {
    state: { response: paymentMethods },
    makeRequest,
  } = useHttp();

  useEffect(() => {
    const config = {
      url: `${BASE_URL}/api/v4/payment-method`,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
      },
    };

    makeRequest(config);
  }, [makeRequest]);

  const handleChange = (e) => {
    setPaymentId(e.target.value);
  };

  return (
    <FormControl sx={{ mb: 4 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 16, mt: 1, mb: 1 }}>
        Payment Method
      </Typography>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={paymentId}
        onChange={handleChange}
      >
        {paymentMethods && (
          <>
            {paymentMethods.map((method) => {
              return (
                <FormControlLabel
                  key={method.id}
                  value={method.id}
                  control={<Radio />}
                  label={method.title}
                />
              );
            })}
          </>
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default Payment;
