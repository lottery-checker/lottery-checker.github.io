import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './AppLoading.css';
export const AppLoading = () => {
    return (
        <div className='AppLoading'>
            <div className="AppLoading__container">
                <CircularProgress className='AppLoading__progress'/>
                <div className="AppLoading__text">
                    Getting Ready ...
                </div>
            </div>
        </div>
    )
}

export default AppLoading
