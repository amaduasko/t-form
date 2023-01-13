import { FC, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { TSelect } from './type';
import { useStyles } from './style';
import {
  ApplicantIndividualCompanyRelation,
  usePositionsQuery,
  useRelationsQuery,
} from '../../api';

const Select: FC<TSelect> = ({
  value,
  onChange,
  required,
  requiredMessage,
  isFieldDirty,
  label,
  fieldRole,
  multiple,
}) => {
  const classes = useStyles({ requiredMessage });
  const query =
    fieldRole === 'relations' ? useRelationsQuery : usePositionsQuery;
  const { data, loading } = query();

  const [fieldValue, setFieldValue] = useState<string | string[]>(
    value || multiple ? [] : ''
  );

  const handleChange = (
    newValue:
      | ApplicantIndividualCompanyRelation
      | ApplicantIndividualCompanyRelation[]
  ) => {
    const result =
      newValue instanceof Array ? newValue.map((v) => v.name) : newValue.name;
    setFieldValue(result);
    onChange && onChange(result);
  };

  const isError =
    isFieldDirty &&
    required &&
    !(multiple ? fieldValue.length > 0 : fieldValue);

  const dataValues = data && Object.values(data)[0];

  const options = (dataValues && dataValues.data) || [];

  return (
    <Autocomplete
      disablePortal
      options={options}
      loading={loading}
      multiple={multiple}
      onChange={(_, newValue) =>
        handleChange(newValue as ApplicantIndividualCompanyRelation)
      }
      getOptionLabel={(option: ApplicantIndividualCompanyRelation) =>
        option.name ?? option
      }
      sx={{
        '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
          color: '#282c34 !important',
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          className={classes.textField}
          variant='filled'
          size='small'
          fullWidth
          label={label}
          error={isError && !value}
        />
      )}
    />
  );
};

export default Select;
