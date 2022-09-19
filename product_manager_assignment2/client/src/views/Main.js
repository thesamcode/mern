import React, { useEffect, useState } from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

import axios from 'axios';

// export default () => {
//     // const [message, setMessage] = useState("Loading...");

//     // useEffect(() => {
//     //     axios.get('http://localhost:8000/api')
//     //     .then(response => {
//     //         setMessage(response.data.message)
//     //     })
//     // }, [])

//     return (
//         // <div>
//         //     <h2>Message from the backend: {message}</h2>
//         // </div>
//         <ProductForm/>
//     )
// }

// PRODUCT MANAGER ASSIGNMENTS COMPLETE

// const Main = (props) => {
//     const [products, setProducts] = useState([]);
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/products')
//             .then(res => {
//                 setProducts(res.data);
//                 setLoaded(true);
//             })
//             .catch(err => console.error(err));
//     }, []);

//     const removeFromDom = productId => {
//         setProducts(products.filter(product => product._id !== productId));
//     }

//     return (
//         <div>
//             <ProductForm />
//             <hr />
//             {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
//         </div>
//     )
// }

// export default Main;


export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}