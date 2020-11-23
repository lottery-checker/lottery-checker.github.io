import React from 'react';
import {Grid} from '@material-ui/core';
import './Footer.css';
const { DateTime } = require("luxon");
const Footer = () => {      
    return (
        <div className="Footer" >             
          <Grid item xs={12} >             
          &#169; Copyright {DateTime.local().toFormat('yyyy')}, All right reserved.
          </Grid>              
        </div>
    );
}
export default Footer;