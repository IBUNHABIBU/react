import React, { useEffect } from 'react'
import axios  from 'axios';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const product = useSelector(state => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch()
    
    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(error => {
            console.log("Error", error)
        })
        dispatch(selectedProduct(response.data))
    }
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    )
}

export default ProductDetail
