import React from 'react'

const ItemContainer = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
}

export default ItemContainer
