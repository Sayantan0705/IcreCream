import React from 'react';
import Scoop from '../../icecream/Scoop/Scoop';
import classes from './Body.module.css';

function Body() {
    return (
        <div className={classes.mainBody}>
            <Scoop />
        </div>
    );
}

export default Body;
