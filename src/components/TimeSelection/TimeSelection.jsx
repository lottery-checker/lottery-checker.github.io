import React from 'react';
import './TimeSelection.css';
import { useStateValue } from '../../provider'
const TimeSelection = () => {
    const [ { times }] = useStateValue();
    return (
        <div className='TimeSelection'>
            <select className='TimeSelection__select'>
                {
                    times.map(({ time, label }, index) => (
                        <option key={index} value={time}>{label}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default TimeSelection
