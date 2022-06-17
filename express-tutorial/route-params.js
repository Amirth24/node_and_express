const express = require('express');
const app = express();
app.use(express.static('./public'));


const data = [{
    name: "bob",
    url: 'https://www.gooogle.com'
},{
    name: 'not bob',
    country: 'USA'
}];
app.get('/',(req,res) => {
    res.status(200)
})

app.get('/api/:id',(req, res) => {
    res.status(200).json(data[Number(req.params.id)])
});


app.listen(5000, () => {
    console.log('Listening on 5000');
});


