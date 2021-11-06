import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {buyIceCream} from '../redux/iceCream/iceCreamActions';

function IceCreamContainer() {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    // console.log(numberOfIceCream)
    const dispatch = useDispatch()
    return (
        <div className="hooks-cake">
            <h1>Ice cream shop</h1>
            <h3>Number of Icecreams: { numberOfIceCream } </h3>
            <button onClick = {() => dispatch(buyIceCream())}> buyIceCream</button>
        </div>
    )
}

export default IceCreamContainer;
