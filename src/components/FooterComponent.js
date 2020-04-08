import  React,{Component} from 'react';
import { makeStyles,AppBar,Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30,
      backgroundColor: `${theme.palette.primary[500]}`,
      borderTop: 'solid 3px #998643'
    },
    title: {
      flexGrow: 1,
    },
    typography: {
      htmlFontSize: 20,
    }
  }));

class FooterComponent extends Component{

    render(){
        const { classes } = this.props;
        const currentYear = new Date().getFullYear()
        return(
            <div className={classes.root}>
              <div style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '238px'}}>
            <AppBar position="static">
                <Typography variant="h6" className={classes.title} align="center" component={'span'}>
                © {currentYear} ABCD
                </Typography>
            </AppBar>
          </div>
          </div>
        );
    }    
}


export default withStyles(useStyles)(FooterComponent);