
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
const ProductListing = () => {
    const products = useSelector(state => state)
    
    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Error", err)
        })
        console.log(response.data[0].description)
    }
    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
