import React from 'react'
import Subscription from './Subscription/Subscription'
import Classses from './Subscriptions.css'

const Subscriptions = (props) => {
    return (
        <div >
            <p className={Classses.text}><b>اشتراک خود را انتخاب کنید</b></p>
            <div className = {
                Classses.line
            } >
                <Subscription/>
                <Subscription />
                <Subscription active={true}/>

            </div>
        </div>
    )
}

export default Subscriptions;