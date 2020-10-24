import React from 'react'
import Classes from './Discount.css'
const discount = (props) => {
    return (
        <div className={Classes.box}>
                        <button className={Classes.btn}>اعمال</button>

            <input placeholder="کد تخفیف دارید؟" className={Classes.input}></input>

        </div>
    )
}

export default discount;