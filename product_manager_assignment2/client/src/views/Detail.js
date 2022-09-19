
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link, Redirect, useNavigate } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { removeFromDom } = props;

    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                // removeFromDom(productId);
                navigate(`/products`);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <p><button onClick={(e) => { deleteProduct(product._id) } }>
                Delete
            </button></p>
        </div>
    )
}

export default Detail;