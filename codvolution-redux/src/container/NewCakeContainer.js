import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'
import { useState } from 'react';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Number of cakes: {props.numberOfCakes}</h1>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick= {() => props.buyCake(number) }>Buy {number} cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
