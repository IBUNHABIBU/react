import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'
import { useState } from 'react';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Number of cakes: {props.numberOfCakes}</h1>
            <input type="text" />
            <button onClick= { props.buyCake }>Buy cakes</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
