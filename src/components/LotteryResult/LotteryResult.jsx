import {lotteryResult} from '../Config/LotteryList';
import './LotteryResult.css';
const LotteryResult = () => {
  console.log(lotteryResult)
    return(
      <div className="lottery-result">
        <h4> ထွက်ရှိမည့် ထီဆုကြီးများ</h4>
        <div className=" lottery-result-body">
          {lotteryResult.map(( index,value ) =>         
              <div key={value} className='lottery-result-button'  >{index.label}</div>
          )}
        </div>
      </div>  
    );
}
export default LotteryResult;