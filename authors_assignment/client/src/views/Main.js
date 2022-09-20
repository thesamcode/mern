import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <p><Link to={"/new"}>
                Add an author
            </Link></p>
            {authors.map((author, idx) => {
                return (<p key={idx}>
                    <p>{author.name}</p>
                    <span> | </span>
                    <button><Link to={"/edit/" + author._id}>Edit</Link></button>
                    <button onClick={(e) => { deleteAuthor(author._id) }}>
                        Delete
                    </button>
                </p>)
            })}
        </div>
    )
}

export default Main;