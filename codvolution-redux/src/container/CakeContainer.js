<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cakes: {props.numberOfCakes}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
=======
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cakes: {props.numberOfCakes}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
