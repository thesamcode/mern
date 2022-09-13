
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Lookup = (props) => {

    const [result, setResult] = useState("");
    const { category, id } = useParams(); 
    const [isHuman, setIsHuman] = useState(true);
    // console.log(category, id)
    
    useEffect(() => {
        // e.preventDefault();
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => { 
                setResult(response.data)
                
                if(`${category}`==="planets"){
                setIsHuman(false)
                }
                // console.log(response) 
            })
            // .then(response => { console.log(response.data.results)})
            .catch(err => console.log(err))

    }, [category, id]);

    return (
        <div>

            {
                isHuman ?
                
                <div>
                    <h1>{result.name}</h1>
                    <p>Height: {result.height}</p>
                    <p>Mass: {result.mass}</p>
                    <p>Hair Color: {result.hair_color}</p>
                    <p>Skin Color: {result.skin_color}</p>
                </div>

                : 

                <div>
                    <h1>{result.name}</h1>
                    <p>Climate: {result.climate}</p>
                    <p>Terrain: {result.terrain}</p>
                    <p>Surface Water: {result.surface_water}</p>
                    <p>Population: {result.population}</p>
                </div>
            }        
        </div>

    );

}

export default Lookup;