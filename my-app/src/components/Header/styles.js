import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "#FFD700",
    }
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  }
}));