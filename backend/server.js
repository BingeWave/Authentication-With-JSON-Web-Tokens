//Require the need files
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios')


//Set the listening
const port = 3500;

//Create the express app
const app = express();

//Add configuration options
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//Enable Dot env
dotenv.config();

//Register Route
app.post('/register', (request, response) => {

    //Register Router according to docs: https://developers.bingewave.com/docs/auth#registertoorganizer
    const url = 'https://bw.bingewave.com/auth/registerToOrganizer';

    //Retrieve the token from the .env file
    let token = process.env.ORGANIZER_TOKEN;

    //Send Axios Post Request To Endpoint
    axios.post(url, {
        email: request.body.email,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
    }, {
        headers: {
          'Authorization': `${token}` 
        }
    })
    .then(result => {
        //Return the JSON response
        response.json(result.data);
    })
    .catch(error => {
        console.error(error)
    })

});

//Login Route
app.post('/login', (request, response) => {

    //Login Router according to docs: https://developers.bingewave.com/docs/auth#logintoorganizer
    const url = 'https://bw.bingewave.com/auth/loginToOrganizer';

    //Retrieve the token from the .env file
    let token = process.env.ORGANIZER_TOKEN;

    //Send Axios Post Request To Endpoint
    axios.post(url, {
        email: request.body.email
    }, {
        headers: {
          'Authorization': `${token}` 
        }
    })
    .then(result => {
        //Return the JSON response
        response.json(result.data);
    })
    .catch(error => {
        console.error(error)
    })
});

//Start the application
app.listen(port, () => { console.log(`Example class app listening at http://localhost:${port}`) })