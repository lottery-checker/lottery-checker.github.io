import React from 'react';
import Banner from '../../components/Banner/Banner';
import './Home.css';
import LotteryList from '../../components/LotteryList/LotteryList';
import LotteryResult from  '../../components/LotteryResult/LotteryResult';
const Home = () => {
    return (
        <div className='Home'>
          <Banner title="၂၁ ကြိမ်မြောက်"/>
          <LotteryList />
          <LotteryResult/>
          
        </div>
    )
}
export default Home
