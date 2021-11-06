import React, { useEffect } from 'react'
import axios  from 'axios';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    let product = useSelector(state => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch()

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(error => {
            console.log("Error", error)
        })
        dispatch(selectedProduct(response.data))
    }
    useEffect(()=> {
        if(productId && productId !== "") fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    return (
        <div className="ui grid container">
           {
               Object.keys(product).length ===0 ? ( 
              <div className="mgt">
               <div className="ui segment">
                   <div className="ui active inverted dimmer">
                   <div className="ui text loader">Loading</div>
                  </div>
                <p></p>
               </div>
              </div>
              ) : (
                 <div className="u placeholder segment">
                     <div className="ui two column stackable center aligned grid">
                         <div className="ui vertical divider">AND</div>
                         <div className="middle aligned row">
                             <div className="colum lp">
                                     <img src={image} alt={image} className="ui fluid image" />
                             </div>
                             <div className="column rp">
                                 <h1>{title}</h1>
                                 <h2>
                                     <a href="" className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                              <p>{description}</p>
                              <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                  <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                             </div>
                             </div>
                         </div>
                     </div>
                 </div>
             )
           }
        </div>
    )
}

export default ProductDetail
