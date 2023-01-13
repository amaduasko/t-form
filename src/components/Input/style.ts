import { makeStyles } from '@mui/styles';

interface Props {
  requiredMessage?: string;
}

export const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      borderRadius: 0,
    },
    '& .Mui-error::before': {
      content: (props: Props) => `"${props.requiredMessage}"`,
      fontSize: 14,
      color: '#d32f2f',
      paddingLeft: 12,
      display: 'flex',
      height: '100%',
      alignItems: 'center',
    },
  },
});
