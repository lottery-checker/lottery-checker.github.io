import React from 'react';
import './TimeSelection.css';
import { useStateValue } from '../../provider'
import { actionTypes } from '../../reducer'
export const TimeSelection = () => {
    const [ { times }, dispatch] = useStateValue();
    const onSelectChange = (e) => {
        dispatch({
            type: actionTypes.SET_SELECTED_TIME,
            payload: times[e.target.value]
        });
    };
    return (
        <div className='TimeSelection'>
            <select className='TimeSelection__select' onChange={onSelectChange}>
                {
                    times.map(({ time, label }, index) => (
                        <option key={index} value={index}>{label}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default TimeSelection;
