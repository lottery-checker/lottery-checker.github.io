import React from 'react';
import './Home.css';
import LotteryList from '../../components/LotteryList/LotteryList';
import LotteryResult from  '../../components/LotteryResult/LotteryResult';

const Home = () => {
    return (
        <div className='Home'>
            Home Page
            <LotteryList />
            <LotteryResult/>
                   
        </div>
    )
}
export default Home
