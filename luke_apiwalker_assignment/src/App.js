
// import React, { useState } from "react";
// import axios from 'axios';
// import {
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import './App.css';

// const types = [
//   'people',
//   'planets'
// ];

// function App() {

//   const [selectedType, setSelectedType] = useState(types[0]);
//   const [inputID, setInputID] = useState("");
//   const [people, setPeople] = useState([]);
//   const [planets, setPlanets] = useState([]);

//   axios.get('https://swapi.dev/api/planets')
//     .then(response => { setPeople(response.data.results) })

//   axios.get('https://swapi.dev/api/people')
//     .then(response => { setPlanets(response.data.results) })

//   // const People = (props) => {
//   //   return (
//   //     <div>
//   //       <h1>People Page</h1>
//   //       <Link to={"/people"}>To People </Link>
//   //     </div>
//   //   );
//   // }

//   // const Planets = (props) => {
//   //   return (
//   //     <div>
//   //       <h1>Planets Page</h1>
//   //       <Link to={"/planets"}>To Planets</Link>
//   //     </div>
//   //   );
//   // }

//   // const Home = (props) => { 
//   //   return (
//   //     <div>
//   //       <h1>Home Component</h1>
//   //       <Link to={"/"}>To Home</Link>
//   //     </div>
//   //   );
//   // }

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const viewItem = {
//       inputItem: inputID,
//       typeItem: selectedType
//     }
//     // setItems([ ... tasks, taskItem]);
//   }


//     return (
//       <div>
//         <form onSubmit={(event) => { handleSearch(event) }}>
//           <label>
//             Search For: <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
//               {types.map((type, idx) =>
//                 <option key={idx} value={type}>{type}</option>
//               )}
//             </select>
//           </label>
//           <label>
//             ID: <input type="text" onChange={(event) => { setInputID(event.target.value) }} value={inputID} />
//           </label>
//           <div>
//             <button>Search</button>
//           </div>
//         </form>

//         {/* return (

//         <div key={i}>
//           {people.length > 0 && people.map((person, i) => {
//             return (
//               <div key={i}>
//                 {person.name}
//                 {person.height}
//                 {person.mass}
//                 {person.hair_color}
//                 {person.skin_color}
//               </div>
//             )
//           })}
//         </div>
//         <div key={i}>
//           {planets.length > 0 && planets.map((planet, i) => {
//             return (
//               <div key={i}>
//                 {planet.name}
//                 {planet.climate}
//                 {planet.terrain}
//                 {planet.surface_water}
//                 {planet.population}
//               </div>
//             )
//           })}
//         </div>
//         ) */}

//       </div>
//     );

//   }

//   export default App;


import Form from './components/Form'
import Lookup from './components/Lookup'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return(
    <div>
      {/* <h1>hello</h1> */}

    <Routes>
      <Route path="/form" element={<Form />}/>
      <Route path="/:category/:id" element={<Lookup />}/>
    </Routes>
    </div>
  )
}

export default App;