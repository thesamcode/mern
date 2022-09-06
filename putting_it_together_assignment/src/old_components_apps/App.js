
import React from 'react';
import './App.css';

//MY ATTEMPT

// import PersonCard from './components/MyComponent';

// function App() {
//   return (
//     <div className="App">
//       <PersonCard firstName={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Black"}/>
//       <PersonCard firstName={"John"} lastName={"Smith"} age={"88"} hairColor={"Brown"}/>
//       <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={"50"} hairColor={"Brown"}/>
//       <PersonCard firstName={"Maria"} lastName={"Smith"} age={"62"} hairColor={"Brown"}/>
//     </div>
//   );
// }

// export default App;


//BETTER WAY TO DO IT

import PersonCard from './components/MyComponent';

var peopleArr =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        // these are the properties called "props" being sent into components: firstName, lastName, etc....
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })
      }
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black"/>
//       <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown"/>
//       <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown"/>
//       <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown"/>
//     </div>
//   );
// }









export default App;