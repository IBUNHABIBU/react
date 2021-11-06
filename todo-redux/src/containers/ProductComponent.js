<<<<<<< HEAD
import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.product)
    const { id, title }  = products[0];

    return (
        <div className =" four column wide">
           <div className="ui link cards">
               <div className="card">
                   <div className="image"></div>
                   <div className="content">
                       <div className="header">
                           <h1>{title} </h1>
                       </div>
                   </div>
               </div>
           </div>
            
        </div>
    )
}

export default ProductComponent;
=======
import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.product)
    const { id, title }  = products[0];

    return (
        <div className =" four column wide">
           <div className="ui link cards">
               <div className="card">
                   <div className="image"></div>
                   <div className="content">
                       <div className="header">
                           <h1>{title} </h1>
                       </div>
                   </div>
               </div>
           </div>
            
        </div>
    )
}

export default ProductComponent;
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
