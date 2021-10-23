import muiStyled from '@mui/system/styled';

export const Toolbar = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '104px',
  padding: theme.spacing(4),
}));
