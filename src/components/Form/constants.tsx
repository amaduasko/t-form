import Input from '../Input/Input';
import Select from '../Select/Select';
import { TFieldProps } from './type';

export const fields = [
  {
    id: '1e8859bb-448c-5242-96ad-93bae255f3bf',
    label: 'Full Name',
    name: 'fullName',
    rules: [
      {
        required: true,
        message: '',
        min: 5,
        max: 10,
      },
    ],
    component: ({ changedFields }: TFieldProps) => (
      <Input
        required
        isFieldDirty={changedFields.includes('fullName')}
        requiredMessage={'Please input your full name!'}
      />
    ),
  },
  {
    id: 'db679180-ee02-5ada-a92f-70d0ae2701f5',
    label: 'Relation',
    name: 'relation',
    rules: [{ required: true, message: '' }],
    component: ({ changedFields }: TFieldProps) => (
      <Select
        required
        fieldRole='relations'
        isFieldDirty={changedFields.includes('relation')}
        requiredMessage={'Please select a relation!'}
      />
    ),
  },
  {
    id: '62d2c8cc-0eb4-54ed-b48f-eaacc7e23d54',
    label: 'Position',
    name: 'position',
    rules: [{ required: true, message: '' }],
    component: ({ changedFields }: TFieldProps) => (
      <Select
        required
        multiple
        fieldRole='positions'
        isFieldDirty={changedFields.includes('position')}
        requiredMessage={'Please select a position!'}
      />
    ),
  },
  {
    id: '91b0a900-0fd9-59d7-bf61-007588a954ff',
    label: 'Comments',
    name: 'comments',
    rules: [
      {
        required: true,
        message: '',
        min: 5,
        max: 10,
      },
    ],
    component: ({ changedFields }: TFieldProps) => (
      <Input
        required
        multiline
        rows={3}
        isFieldDirty={changedFields.includes('comments')}
        requiredMessage={'Please say something!'}
      />
    ),
  },
];

export const fieldNames = fields.map((f) => f.name);
