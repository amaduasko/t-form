import { FC, useState } from 'react';
import { Form } from 'antd';
import { FieldData, InternalNamePath } from 'rc-field-form/lib/interface';
import { fieldNames, fields } from './constants';
import { Button } from '@mui/material';

const FormComponent: FC = () => {
  const [changedFields, setChangedFields] = useState<Array<string>>([]);

  const handleChangedFields = (fields: FieldData[]) =>
    setChangedFields(
      fields.map((field) => {
        const namePath = field.name as InternalNamePath;
        return namePath[0] as string;
      })
    );
  const handleFailedForm = () => {
    if (changedFields.length === 0) {
      setChangedFields(fieldNames);
    }
  };

  const onFinish = (values: any) => {
    console.log('T-Form Value :=>', values);
  };

  return (
    (fields.length > 0 && (
      <Form
        name='tForm'
        onFieldsChange={handleChangedFields}
        onFinishFailed={handleFailedForm}
        onFinish={onFinish}
        autoComplete='off'
        layout='vertical'
      >
        {fields.map((field) => (
          <Form.Item
            key={field.id}
            label={field.label}
            name={field.name}
            rules={field.rules}
          >
            {field.component({ changedFields })}
          </Form.Item>
        ))}
        <Button
          fullWidth
          size='large'
          color='primary'
          variant='contained'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    )) ||
    null
  );
};

export default FormComponent;
