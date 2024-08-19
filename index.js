import express from 'express';
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