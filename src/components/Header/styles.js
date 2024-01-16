import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#FFFF00', 0.15),
    '&:hover': { backgroundColor: alpha('#FFFF00', 0.25) },
    marginRight: theme.spacing(1.5),
    marginLeft: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(2), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '10ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
  autocompleteList: {
    position:'absolute',
    backgroundColor: '#ffd425',
    zIndex:1,
    marginTop: theme.spacing(3),
    width: '100%',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
    borderRadius: theme.shape.borderRadius,
    maxHeight: '200px',
    overflowY: 'auto', '& li': {
      cursor: 'pointer',
    },
  },
}));