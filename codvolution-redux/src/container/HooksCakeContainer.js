<<<<<<< HEAD
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
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
=======
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
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
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
