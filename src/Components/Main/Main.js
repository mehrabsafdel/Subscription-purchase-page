import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Classes from './Main.css'
import Icon from './UI/Icon/Icon'
import Subscriptions from './UI/Subscriptions/Subscriptions'
import Discount from './UI/Discount/Discount'
import Bag from './UI/Bag/Bag'
const main = (props) => {
    return (
        <Row className={Classes.main}>
                <Col sm={2}></Col>
                <Col sm={8} className={Classes.body}>
                <Row>
                    <Col sm={2}></Col>
                        <Col sm={8} className={Classes.elements}>
                        <Icon />
                        <Subscriptions />
                        <Discount />
                        <Bag />
                        <button className={Classes.btn}>پرداخت</button>
                    </Col>
                    <Col sm={2}></Col>
                </Row>    
                </Col>
                <Col sm={2}></Col>
        </Row>
    )
}

export default main;