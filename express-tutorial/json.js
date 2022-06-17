const express = require('express');
const app = express();


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


