import './LotteryList.css';
import {lotteryList} from '../Config/LotteryList';
const LotteryList = () => {
    return (
        <div className='LotteryList'> 
          <h4> ထီဆုကြီးများ</h4>
           {lotteryList.map( lottery => 
              <p> {lottery}</p>
           )}
        </div>
    );
}
export default LotteryList;