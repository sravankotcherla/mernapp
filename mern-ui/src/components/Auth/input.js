import React from "react";
import { TextField, Grid, IconButton, InputAdornment } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Input = (props) => {
  const {
    half,
    name,
    label,
    value,
    autoFocus,
    onChange,
    handleShowPassword,
    type,
  } = props;

  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={onChange}
        value={value}
        variant="outlined"
        required={true}
        fullWidth={true}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "Password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "Password" ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};
export default Input;
