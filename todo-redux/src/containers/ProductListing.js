<<<<<<< HEAD

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {

    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(error => {
            console.log("Error", error)
        })
        console.log(response);
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
=======

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {

    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(error => {
            console.log("Error", error)
        })
        console.log(response);
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
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
