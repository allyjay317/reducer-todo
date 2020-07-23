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
    fontSize: 14,
    padding: '10px',
    fontSize: '2rem',
  },
  cardTitleCompleted: {
    fontSize: 14,
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
    fontSize: 12
  },
}));