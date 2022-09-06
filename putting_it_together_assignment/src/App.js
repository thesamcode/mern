
import React from 'react';
import './App.css';

import UserForm from './components/UserForm';

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
        return <UserForm firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })
      }
    </div>
  );
}

export default App;