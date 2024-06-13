import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actionCreators} from './state/index'
import { bindActionCreators } from 'redux';

const Shop = () => {
    const dispatch  =  useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    const Balance = useSelector(state=> state.amount)

    return (
        <div className='container'>
            <h1>Deposit/Withdraw Money</h1>
            {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Your Updated Balance
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(1000)}}>-</button>
            Your Updated Balance is : {Balance}
            <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(1000)}}>+</button>
        </div>
    )
}

export default Shop