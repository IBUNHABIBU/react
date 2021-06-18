import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div className="hooks-cake">
            <h1>Use selector hook</h1>
            <h3>Number of Cake: { numberOfCakes } </h3>
            <button onClick = {() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
