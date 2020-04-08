import  React,{Component} from 'react';
import { makeStyles,AppBar,Toolbar,Typography,IconButton, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

class HeaderComponent extends Component{

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  User Details
                </Typography>
               
              </Toolbar>
            </AppBar>
          </div>
        );
    }    
}


export default withStyles(useStyles)(HeaderComponent);