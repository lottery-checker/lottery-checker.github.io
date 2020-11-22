import React from 'react';
import Banner from '../../components/Banner/Banner';
import LotteryList from '../../components/LotteryList/LotteryList';
import LotteryResult from  '../../components/LotteryResult/LotteryResult';
import { useStateValue } from '../../provider';
import './Home.css';
const Home = () => {
    const [{ selectedTime }] = useStateValue();
    const { label, status } = selectedTime;
    return (
        <div className='Home'>
          <Banner title={`${label} မြောက်`}/>
          {
            status === 'FINISHED' ?
            <LotteryList />
            :
            <LotteryResult/>
          }
        </div>
    )
}
export default Home
