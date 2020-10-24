import React from 'react'
import Classses from './Subscription.css'
import styled from 'styled-components';


const Subscription = (props) => {
    const inputClasses = [];

    if (props.active) {
        inputClasses.push(Classses.active);
    }
    else
        inputClasses.push(Classses.subscription);

    return (
        <div className = {
            inputClasses.join(' ')
        } >
            <div>
            <h3>یک ماهه</h3>
            <br/>
            <h2><b>49</b></h2>
                <h5>هزار تومن</h5>
                </div>
            <div className={Classses.iconContainer}>
                <i class="material-icons" ><div className={props.active? Classses.icon: Classses.disableIcon}>check</div></i>
            </div>
        </div>

    )
}

export default Subscription;