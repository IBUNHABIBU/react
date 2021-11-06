<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props){
    return (
        <div>
            <h2>Item - { props.item } </h2>
            <button onClick= {props.buyItem }> Buy item </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCream;
    return {
        item: itemState,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFuction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

  return {
      buyItem: dispatchFuction
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
=======
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props){
    return (
        <div>
            <h2>Item - { props.item } </h2>
            <button onClick= {props.buyItem }> Buy item </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCream;
    return {
        item: itemState,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFuction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

  return {
      buyItem: dispatchFuction
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
