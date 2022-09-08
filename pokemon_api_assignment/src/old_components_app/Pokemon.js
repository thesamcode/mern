

import React, {useState, useEffect} from 'react';

// const Pokemon = (props) => {
//     const {state, setState} = useState(0);

//     useEffect(() => {
//         console.log("Hello")
//         fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
//         .then(response => {
//             return response.json()
//         })
//         .then(response => {
//             setState({
//                 characters: response.results
//             })
//         })
//     }, []);

//     return (
//         <div>
//             (state.characters ? state.characters.map((item, index) => {
//                 return(<div key={index}>{item.name}</div>)
//             }):null)
//         </div>
//     );
// }
// export default Pokemon;


const Pokemon = (props) => {
    const [characters, setCharacters] = useState([]);
    //default state of the button is false
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true);
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(response => setCharacters(response.results))
    }, []);

    return (
        <div>
            <button onClick = { handleClick }>Fetch Pokemon</button>
            {
                isClicked ?
            characters.length > 0 && characters.map((character, index)=>{
                return (<div key={index}>{character.name}</div>)
            })
                : <div></div>
            }
        </div>
    );
};
export default Pokemon;