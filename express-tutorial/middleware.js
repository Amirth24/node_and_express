const express = require('express');
const app = express();
const {logger, authorize} = require('./utils');

app.use([logger, authorize]);
// Home Page
app.get('/',(req,res) => {
    
    res.send(`<h1>Hello ${req.user.name}</h1>`)
})

// Contact Page 
app.get('/contact', (req,res) => {
    res.send('<h1>Contacts Page</h1>')
});

// All other request other than above one
app.all('*', (req,res) => {
    res.status(404).send('<h1>Oops Page Not Found</h1>');
});

// express listen
app.listen(5000,() => {
    console.log('listening on port 5000');
})
