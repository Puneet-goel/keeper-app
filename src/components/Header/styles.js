import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "#faf6e0",
    }
  },
  appBar: {
    borderRadius: 15,
    margin: '0px 0px 30px 0px',
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