
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import DeleteButton from './DeleteButton';

// PRODUCT MANAGER ASSIGNMENTS COMPLETE

// const ProductList = (props) => {
//     const {removeFromDom} = props;

//     const deleteProduct = (productId) => {
//         axios.delete('http://localhost:8000/api/products/' + productId)
//             .then(res => {
//                 removeFromDom(productId)
//             })
//             .catch(err => console.error(err));
//     }

//     return (
//         <div>
//             <h1>All Products:</h1>
//             {/* {props.products.map( (product, i) =>
//                 <p key={i}>{product.title}</p>
//             )} */}
//             {props.products.map((product, idx) => {
//                 return <p key={idx}>
//                     {/* <Link to={"/" + product._id}> */}
//                     <Link to={"/products/" + product._id}>
//                         {product.title}
//                     </Link>
//                     <span> | </span>
//                     <button onClick={(e)=>{deleteProduct(product._id)}}>
//                         Delete
//                     </button>
//                 </p>
//             })}
//         </div>
//     )
// }
    
// export default ProductList;

const ProductList = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/products/" + product._id}>
                        {product.title}
                    </Link>
                    <span> | </span>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </p>
            })}
        </div>
    )
}
    
export default ProductList;