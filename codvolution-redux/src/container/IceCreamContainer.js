import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {buyIceCream} from '../redux/iceCream/IceCreamActions';

function IceCreamContainer() {
    const numberOfIceCream = useSelector(state => state.numberOfIceCream)
    const dispatch = useDispatch()
    return (
        <div className="hooks-cake">
            <h1>Use selector hook</h1>
            <h3>Number of Cake: { numberOfIceCream } </h3>
            <button onClick = {() => dispatch(buyIceCream())}> buyIceCream</button>
        </div>
    )
}

export default IceCreamContainer;
