export type TInput = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  multiline?: boolean;
  required?: boolean;
  requiredMessage?: string;
  isFieldDirty?: boolean;
};
