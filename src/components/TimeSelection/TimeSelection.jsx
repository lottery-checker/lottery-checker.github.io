import React from 'react';
import './TimeSelection.css';
import { useStateValue } from '../../provider'
export const TimeSelection = () => {
    const [ { times }] = useStateValue();
    return (
        <div className='TimeSelection'>
            <select className='TimeSelection__select'>
                {
                    times.map(({ sheetid, label }, index) => (
                        <option key={index} value={sheetid}>{label}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default TimeSelection;
