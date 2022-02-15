import muiStyled from '@mui/system/styled';

const AppToolbar = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '80px',
  padding: theme.spacing(4),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2),
}));

export default AppToolbar;
