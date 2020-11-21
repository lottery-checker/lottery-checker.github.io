import React from 'react';
import { makeStyles,Container,Grid} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import './About.css';

const useStyles = makeStyles((theme) => ({ 
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '20px',

  },
}));

const About = () => {
    const classes=useStyles();
    return (
        <Container className='About'>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <h3 className='about-text'>About Page </h3>
            <p > Lottery Checker App is non profit app for checking Myanmar lottery results.This app is live at here(https://lottery-checker.github.io)</p>
            <h3 className='about-text'>Contributors</h3>
          </Grid> 
          <Grid item xs={12}>          
            <div className="about-logo">                 
                <Avatar alt="Remy Sharp" src="https://avatars2.githubusercontent.com/u/49815662?s=400&u=18ad3740a825466714b856fc2a715ec8b4d63807&v=4" className={classes.large} />       
                <Avatar alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/47824384?s=460&u=91c5d3625b88c9b716ec0edf422e13d731010425&v=4" className={classes.large}/>        
                <Avatar alt="Remy Sharp" src="https://avatars3.githubusercontent.com/u/41888392?s=460&u=5a25a4bddceb857735cd9678ceb9b3e8ea7a3568&v=4"   className={classes.large}/>           
            </div>
            </Grid>
           
            <Grid item xs={12}>
                <h3 className='about-text'>Open Source</h3>
                <p>https://lottery-checker.github.io/</p>
            </Grid>
          </Grid>
        </Container>
    )
}

export default About
