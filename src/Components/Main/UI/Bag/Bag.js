import React from 'react'
import Classes from './Bag.css'
const bag = (props) => {
    return (
        <div className={Classes.bag}>
            <div className={Classes.money}>
                <p className={Classes.leftNumber}> ریال <b className={Classes.emp}> 10000 </b></p>
                <p className={Classes.rightText}><b> اعتبار کیف پول </b></p>
            </div>
            <div className={Classes.money}>
                <p className={Classes.leftNumber}> ریال <b className={Classes.emp}> 10000 </b></p>
                <p className={Classes.rightText}><b> تخفیف </b></p>
            </div>
            <br />
            <p className={Classes.centerText}><b>مبلغ قابل پرداخت </b></p>
            <div className={Classes.cost}><b>490,000</b></div>

        </div>
    )
}

export default bag;