// Changed to Robert's
// import { faker } from '@faker-js/faker';
const {faker} = require("@faker-js/faker")

const express = require("express");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const port = 8000;

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        userId: faker.datatype.uuid(),
    };
    return newUser;
};
    
const newUser = createUser();
console.log(newUser);

const createCompany = () => {
    const newCompany = {
        userId: faker.datatype.uuid(),
        company: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country(),
    };
    return newCompany;
};
    
const newCompany = createCompany();
console.log(newCompany);

/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

app.post("/api/users/new", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body.createUser());
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body.createUser());
    // we always need to respond with something
    // res.json( { status: "ok" } );
    res.status("ok")
});

app.get("/api/users/new", (req, res) => {
    // res.json({ message: "Hello World" });
    res.json( newUser );
});

app.post("/api/companies/new", (req, res) => {
    console.log(req.body.createCompany());
    companies.push(req.body.createCompany());
    res.status("ok")
});

app.get("/api/companies/new", (req, res) => {
    res.json( newCompany );
});

app.post("/api/user/company", (req, res) => {
    console.log(req.body.createCompany(), req.body.createUser());
    companies.push(req.body.createCompany());
    users.push(req.body.createUser());
    // res.json( { status: "ok" } );
    res.status("ok")
});

// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     const status = err.status || 500;
//     res.status(status);
//     res.render('error');
//   });

app.get("/api/user/company", (req, res) => {
    // res.json( newCompany );
    res.json( newCompany, newUser );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );