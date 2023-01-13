export type TSelect = {
  label?: string;
  value?: string;
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  required?: boolean;
  requiredMessage?: string;
  isFieldDirty?: boolean;
  fieldRole: 'relations' | 'positions';
};
