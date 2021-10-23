import React, { FunctionComponent } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';

export enum DataTestId {
  Label = 'tf-label',
  Input = 'tf-input',
  ErrorMessage = 'tf-error-message',
}

const CustomInput = styled(InputBase)(({ theme, error }) => ({
  'label + &': {
    marginTop: theme.spacing(2.5),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fcfcfb',
    border: '1px solid',
    borderColor: error ? theme.palette.error.main : '#ced4da',
    fontSize: 16,
    padding: '8px 10px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontWeight: 700,
}));

export interface CustomTextFieldProps {
  label?: string;
  inputProps?: Partial<InputBaseProps>;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
}

const CustomTextField: FunctionComponent<CustomTextFieldProps> = ({
  label,
  inputProps,
  error,
  errorMessage,
  required,
}) => {
  return (
    <FormControl variant="standard" fullWidth>
      {label && (
        <CustomLabel
          data-testid={DataTestId.Label}
          shrink
          htmlFor="custom-input"
          error={error}
        >
          {label}
          {required && '*'}
        </CustomLabel>
      )}
      <CustomInput
        data-testid={DataTestId.Input}
        id="custom-input"
        {...inputProps}
        error={error}
        required={required}
      />
      {error && (
        <FormHelperText data-testid={DataTestId.ErrorMessage} error={error}>
          {errorMessage ? errorMessage : 'This field is required!'}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomTextField;
