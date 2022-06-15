const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/',(req,res) => {
    res.status(200)
    console.log('user connected')
})

app.get('/contact', (req,res) => {
    res.status(200).sendFile(__dirname+'/public/contact.html');
});
app.all('*', (req,res) => {
    res.status(404).send('<h1>Oops Page Not Found</h1>');
});


app.listen(5000,() => {
    console.log('listening on port 5000');
})
