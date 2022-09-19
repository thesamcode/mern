
import React, {useState} from 'react';

import axios from 'axios';
// this line below get's auto added. get rid of it!!!!
// import e from 'express';

// export default props => {


// PRODUCT MANAGER ASSIGNMENTS COMPLETE

// export default () => {
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState();
//     const [description, setDescription] = useState("");

//     const onSubmitHandler = e => {
//         e.preventDefault();
//         axios.post('http://localhost:8000/api/products', {
//             title,
//             price,
//             description
//         })
//         // .then(res=>console.log("Response: ", res))
//         // .catch(err=>console.log("Error: ", err))
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err))
//     }

//     return (
//         <form onSubmit={onSubmitHandler}>
//             <h1>Product Manager</h1>
//             <p>
//                 <label>Title: </label>
//                 <input type="text" onChange={e=>setTitle(e.target.value)}/>
//                 {/* <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/> */}
//             </p>
//             <p>
//                 <label>Price: </label>
//                 <input type="number" onChange={e=>setPrice(e.target.value)}/>
//                 {/* <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/> */}
//             </p>
//             <p>
//                 <label>Description: </label>
//                 <input type="text" onChange={e=>setDescription(e.target.value)}/>
//                 {/* <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/> */}
//             </p>
//             <input type="submit"/>
//         </form>
//     )

// }

export default props => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    return (
            // <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" value={title} name="title" onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="number" value={price} name="price" onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" value={description} name="description" onChange={(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}