/* import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static('public'));
app.get('/',(req,res)=>
{
    res.sendFile(path.resolve(index.html))
})
app.post('/submit-form', (req, res) => {
    const { NAME, date_of_birth, email, password, check_password, food_pref, drink_pref } = req.body;

    // Perform server-side validation
    if (!NAME || !email || !password || !check_password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    if (password !== check_password) {
        return res.status(400).json({ message: 'Passwords do not match!' });
    }

    if (date_of_birth && new Date(date_of_birth) > new Date()) {
        return res.status(400).json({ message: 'Date of Birth cannot be in the future!' });
    }

console.log({
    NAME,
    date_of_birth,
    email,
    password,
    food_pref,
    drink_pref
});

res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(3000, () => console.log('Server listening on port 3000...🌍'));

/*npm start
npm -- from linux repo --- tm2
if fetch is used inside a function , of us e.then chaining make that function async 
JSON.stringify => object to json see how to allow corsfrom a server to allow a request to browser */
/* import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

// Middleware to parse URL-encoded and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the HTML file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { NAME, date_of_birth, email, password, check_password, food_pref, drink_pref } = req.body;

    // Server-side validation
    if (!NAME || !email || !password || !check_password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    if (password !== check_password) {
        return res.status(400).json({ message: 'Passwords do not match!' });
    }

    if (date_of_birth && new Date(date_of_birth) > new Date()) {
        return res.status(400).json({ message: 'Date of Birth cannot be in the future!' });
    }

    // If all validations pass, log the form data
    console.log({
        NAME,
        date_of_birth,
        email,
        password,
        food_pref,
        drink_pref
    });

    // Send a success response
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server listening on port 3000...🌍'));
 */

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

// Middleware to parse URL-encoded and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the HTML file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { NAME, date_of_birth, email, password, check_password, food_pref, drink_pref } = req.body;

    // Initialize an empty errors object
    let errors = {};

    // Server-side validation
    if (!NAME) errors.NAME = 'Name is required!';
    if (!email) errors.email = 'Email is required!';
    if (!password) errors.password = 'Password is required!';
    if (!check_password) errors.check_password = 'Please confirm your password!';
    if (password !== check_password) errors.check_password = 'Passwords do not match!';
    if (date_of_birth && new Date(date_of_birth) > new Date()) {
        errors.date_of_birth = 'Date of Birth cannot be in the future!';
    }

    // If there are errors, return them
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    // If all validations pass, log the form data
    console.log({
        NAME,
        date_of_birth,
        email,
        password,
        food_pref,
        drink_pref
    });

    // Send a success response
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server listening on port 3000...🌍'));
