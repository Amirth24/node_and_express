const express = require('express');
const app = express();
const {people} = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}))
app.post('/add', (req,res)=>{
    addPeople(req.body.name)
    res.status(200).send('POST successful');
})

app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people})
})

// express listen
app.listen(5000,() => {
    console.log('listening on port 5000');
});


const addPeople = (name) => {
    let found = people.find((data) => name === data.name);
    if (!found){
        people.push({id:people[people.length - 1].id + 1, name})
    }
}
