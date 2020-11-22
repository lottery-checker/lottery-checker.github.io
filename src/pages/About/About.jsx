import React from 'react';
import { makeStyles,Container,Grid} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import './About.css';
import {contributors} from '../../components/Config/LotteryList';

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
        <Container>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <h3 className='About__header'>About Us </h3>
            <p > Lottery Checker App is non profit app for checking Myanmar lottery results.This app is live at here(https://lottery-checker.github.io)</p>
            <h3 className='about-text'>Contributors</h3>
          </Grid> 
          <Grid item xs={12}>          
            <div className="About__logo">                
                {contributors.map( (contributor,index) => { 
                    return(
                        <Avatar alt={contributor.name} key={index} src={contributor.image} className={classes.large}/> 
                    )                       
                })}
            </div>
            </Grid>           
            <Grid item xs={12}>
                <h3 className='About__header'>Open Source</h3>
                <p>https://lottery-checker.github.io/</p>
            </Grid>
          </Grid>          
        </Container>    
    )
}

export default About
