import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cardTitle: {
    padding: '10px',
    fontSize: '2rem',
  },
  cardTitleCompleted: {
    padding: '10px',
    fontSize: '2rem',
    textDecoration: 'line-through'
  },
  ActionButtons:{
    position: 'fixed', 
    bottom: '10px', 
    right: '10px'
  },
  todoContainer:{
    marginTop: '100px'
  },
  todo:{
    margin: theme.spacing(3),
    maxWidth: '500px'
  },
  cardSubtitle:{
    fontSize: ".7rem"
  },
  todoModal:{
    position: 'absolute',
    width: 400,
    backgroundColor: 'whitesmoke',
    border: '2px solid #000',
    padding: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: theme.shadows[5],
    border: 'none',
  },
  modal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none'
  },

}));