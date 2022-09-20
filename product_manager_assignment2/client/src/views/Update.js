
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

// PRODUCT MANAGER ASSIGNMENTS COMPLETE

// const Update = (props) => {
//     const { id } = useParams();
//     const [title, setTitle] = useState('');
//     const [price, setPrice] = useState();
//     const [description, setDescription] = useState('');

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/products/' + id)
//             .then(res => {
//                 setTitle(res.data.title);
//                 setPrice(res.data.price);
//                 setDescription(res.data.description);
//             })
//     }, []);

//     const updateProduct = e => {
//         e.preventDefault();
//         axios.put('http://localhost:8000/api/products/' + id, {
//             title,
//             price,
//             description
//         })
//             // .then(res => console.log(res));
//             .then(res => {
//                 navigate(`/products`);
//             })
//             .catch(err => console.error(err));
//     }

//     return (
//         <div>
//             <h1>Update a Product</h1>
//             <form onSubmit={updateProduct}>
//                 <p>
//                     <label>Title</label><br />
//                     <input type="text" 
//                     name="title" 
//                     value={title} 
//                     onChange={(e) => { setTitle(e.target.value) }} />
//                 </p>
//                 <p>
//                     <label>Price</label><br />
//                     <input type="number" 
//                     name="price" 
//                     value={price} 
//                     onChange={(e) => { setPrice(e.target.value) }} />
//                 </p>
//                 <p>
//                     <label>Description</label><br />
//                     <input type="text" 
//                     name="description" 
//                     value={description} 
//                     onChange={(e) => { setDescription(e.target.value) }} />
//                 </p>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

// export default Update;


const Update = (props) => {
    // use params is what takes the value from the url to put into here
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {
                navigate(`/products`);
            });
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
                <DeleteButton productId={product._id} successCallback={() => navigate(`/products`)} />
                </>
            )}
        </div>
    )
}

export default Update;