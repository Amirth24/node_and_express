const express = require('express');
const app = express();
app.use(express.static('./public'));
app.get('/',(req,res) => {
    res.status(200)
})

app.get('/api',(req, res) => {
    res.status(200).json([{
        name: "bob",
        url: req.url
    },{
        name: 'not bob',
        country: 'USA'
    }])

});


app.listen(5000, () => {
    console.log('Listening on 5000');
});


