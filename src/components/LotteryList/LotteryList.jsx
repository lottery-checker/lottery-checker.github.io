import './LotteryList.css';
import {lotteryList} from '../Config/LotteryList';
import { Grid,Container}   from '@material-ui/core';
const LotteryList = () => {
    return (      
        <Container>
          <h4> ထီဆုကြီးများ </h4>
           {lotteryList.map( (lottery,index) => 
            <Grid  item xs={12} key={index}>             
              <p> {lottery}</p>
            </Grid>  
           )}
       </Container >        
    );
}
export default LotteryList;