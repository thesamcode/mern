
// import React, { Component } from 'react';

// MY STUFF I DID
// class PersonCard extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>{ this.props.lastName }, { this.props.firstName }</h1>
//                 <p>Age: {this.props.age}</p>
//                 <p>Hair Color: {this.props.hairColor}</p>
//             </div>
//         );
//     }
// }

// export default PersonCard;





// THE BETTER WAY
// class PersonCard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             age: this.props.age,
//             hairColor: "rainbow"
//         };
//     }
//     increaseAge = () => {
//             this.setState({ age: this.state.age + 1 });
//     }
//     render(){
//         return(
//         // <div className={classes.card}>
//         // <div className={classes.content}>
//         <div>
//             <h1>{this.props.lastName}, {this.props.firstName}</h1>
//             <p>Age: {this.state.age}</p>
//             <p>Hair Color: {this.props.hairColor} New Hair: {this.state.hairColor}</p>
//             <button onClick={ ()=> this.increaseAge() }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
//         </div>
//         // </div>
//         // </div>
//         );
//     }
// }
// export default PersonCard;




// USING FUNCTIONAL COMPONENTS

// import React, { useState } from 'react';

// const PersonCard = props => {
//     const [state, setState] = useState({
//         increaseAge: this.props.age
//     })
//     const clickHandler = e => {
//         console.log(state)
//         setState({
//             increaseAge: state.increaseAge + 1
//         })
//     }

//     return(
//         <div>
//             <h1>{ props.lastName }, { props.firstName }</h1>
//             {/* <p>Age: { props.age }</p> */}
//             <p>Age: { state.increaseAge }</p>
//             <p>Hair Color: { props.hairColor }</p>
//             <button onClick={clickHandler}>Birthday Button for {props.firstName} {props.lastName}</button>
//         </div>
//     );
// }

// export default PersonCard;

// USING HOOKS AND FUNCTIONAL COMPONENTS
// import React, {useState} from 'react';
// const PersonCard = props => {
//     const [state, setState] = useState({
//         increaseAge: props.age 
//     });

//     const handleClick = () => {
//         setState({
//             increaseAge: state.increaseAge + 1
//         });
//     }
//     return(
//         <div>
            
//             <h1>{ props.lastName }, { props.firstName }</h1>
//             <p>Age: { state.increaseAge }</p>
//             <p>Hair Color: { props.hairColor }</p>
//             <button onClick = { handleClick }>Birthday Button for {props.firstName} {props.lastName}</button>
//         </div>
//     );
// }
// export default PersonCard;



import React, {useState} from 'react';
const PersonCard = props => {
    const [state, setState] = useState(props.age);

    const handleClick = () => {
        setState(state + 1);
    }
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { state }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick = { handleClick }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default PersonCard;