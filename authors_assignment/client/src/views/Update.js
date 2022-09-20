

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, []);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => {
                navigate(`/`);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <p><Link to={"/"}>
                Home
            </Link></p>
            <h2>Edit this author</h2>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name:</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            {/* <button onClick={(e) => { deleteProduct(product._id) }}>
                Cancel
            </button> */}
        </div>
    )
}

export default Update;