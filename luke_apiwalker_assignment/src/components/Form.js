import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


const Form = () => {

    // const [inputs, setInputs] = props;
    // const [catName, setCatName] = useState({catName: "", id: ""});
    const [catName, setCatName] = useState("people");
    const [id, setID] = useState("");

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        navigate(`/${catName}/${id}`);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <select value={catName} onChange={ (e) => setCatName(e.target.value)}>
                    <option>people</option>
                    <option>planets</option>
                </select>
                <input type="text" onChange={ (e) => setID(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Form;