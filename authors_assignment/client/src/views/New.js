
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

export default () => {
    const [name, setName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name,
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <p><Link to={"/"}>
                Home
            </Link></p>
            <h2>Add a new author: </h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                </p>
                <input type="submit" />

            </form>
        </div>
    )
}
