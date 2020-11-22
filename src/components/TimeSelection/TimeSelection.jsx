import React from 'react';
import './TimeSelection.css';
const TimeSelection = () => {
    const times = ['၂၂ ကြိမ်', '၂၁ ကြိမ်', '၂၀ ကြိမ်'];
    return (
        <div className='TimeSelection'>
            <select className='TimeSelection__select'>
                {
                    times.map((time, index) => (
                        <option key={index} value="1">{time}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default TimeSelection
