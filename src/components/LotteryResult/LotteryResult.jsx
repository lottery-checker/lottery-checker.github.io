import {lotteryResult} from '../Config/LotteryList';
import './LotteryResult.css';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Grid,Paper }  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',  
    background: '#fAA700',
  },
}));
const LotteryResult = () => {
    const classes = useStyles();
    return(
      <Container>
        <h4> ထွက်ရှိမည့် ထီဆုကြီးများ</h4>   
        <Grid container>          
          {lotteryResult.map(( lottery,key ) =>           
              <Grid item xs={12} sm={4} key={key} className='lottery-result-button'  >
                <Paper className={classes.paper}> {lottery.label}</Paper>               
              </Grid>          
          )}     
         </Grid>    
      </Container>  
    );
}
export default LotteryResult;