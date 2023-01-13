import React, { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { TInput } from './type';
import { useStyles } from './style';

const Input: FC<TInput> = ({
  value,
  onChange,
  required,
  requiredMessage,
  isFieldDirty,
  label,
  multiline,
  rows,
}) => {
  const classes = useStyles({ requiredMessage });

  const [fieldValue, setFieldValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  const isError = isFieldDirty && required && !value;

  return (
    <TextField
      sx={{
        width: { sm: '100%', md: 500 },
      }}
      className={classes.textField}
      variant='filled'
      size='small'
      multiline={multiline}
      rows={rows}
      label={label}
      value={fieldValue}
      onChange={handleChange}
      error={isError && !value}
    />
  );
};

export default Input;
