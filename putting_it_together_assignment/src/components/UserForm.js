
// import React, { useState } from 'react';

// const UserForm = (props) => {
//     const [firstname, setFirstName] = useState("");
//     const [lastname, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmpw, setConfirmPW] = useState("");

//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { firstname, lastname, email, password, confirmpw };
//         console.log("Welcome", newUser);
//     };

//     return (
//         <form onSubmit={createUser}>
//             <div>
//                 <label>First Name: </label>
//                 <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
//             </div>
//             <div>
//                 <label>Last Name: </label>
//                 <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastname} />
//             </div>
//             <div>
//                 <label>Email: </label>
//                 <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
//             </div>
//             <div>
//                 <label>Password: </label>
//                 <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
//             </div>
//             <div>
//                 <label>Confirm Password: </label>
//                 <input type="text" onChange={(e) => setConfirmPW(e.target.value)} value={confirmpw} />
//             </div>
//             <input type="submit" value="Create User" />
//             <div>
//                 <p>Your Form Data</p>
//                 <p>First Name: {firstname}</p>
//                 <p>Last Name: {lastname}</p>
//                 <p>Email: {email}</p>
//                 <p>Password: {password}</p>
//                 <p>Confirm Password: {confirmpw}</p>
//             </div>
//         </form>
//     );
// };

// export default UserForm;



//THIS IS WITH CONDITIONAL FORMATTING FOR MORE FORMS ASSIGNMENT

import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstNameError] = useState("");
    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpw, setConfirmPW] = useState("");
    const [confirmpwError, setConfirmPWError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpw };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPW = (e) => {
        setConfirmPW(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPWError("Confirm Password is required!");
        // } else if(e.target.value.length < 8) {
        //     setConfirmPWError("Confirm Password must be 8 characters or longer!");
        } else if(e.target.value != password) {
            setConfirmPWError("Passwords must match");
        } else {
            setConfirmPWError("");
        }
    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        // <form onSubmit={createUser}>
        <form onSubmit={ (e) => e.preventDefault() }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPW } />
                {
                    confirmpwError ?
                    <p style={{color:'red'}}>{ confirmpwError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;