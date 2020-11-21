import React from 'react';
import {Grid} from '@material-ui/core';
import './Footer.css';
const Footer = () => {   
    return (
        <div className="Footer" >             
          <Grid item xs={12} >             
            Copyright {(new Date().getFullYear())}, All right reserved.
          </Grid>              
        </div>
    );
}
export default Footer;