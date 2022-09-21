
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

export default function Main() {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => console.log(res))
            // .catch(err => console.log(err))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <p><Link to={"/"}>
                Home
            </Link></p>
            <h2>Add a new author: </h2>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name: </label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                </p>
                <input type="submit" />

            </form>
        </div>
    )
}
