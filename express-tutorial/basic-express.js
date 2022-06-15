const express = require('express');
const app = express();

// Setting up Static Assets
app.use(express.static('./public'));


// Home Page
app.get('/',(req,res) => {
    res.status(200)
    console.log('user connected')
})

// /contact 
app.get('/contact', (req,res) => {
    res.status(200).sendFile(__dirname+'/public/contact.html');
});

// All other request other than above one
app.all('*', (req,res) => {
    res.status(404).send('<h1>Oops Page Not Found</h1>');
});

// express listen
app.listen(5000,() => {
    console.log('listening on port 5000');
})
