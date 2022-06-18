const express = require('express');
const app = express();
const {people} = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));

// Login Page
app.get('/login', (req,res) => {
   res.status(200).sendFile(__dirname+'/methods-public/login.html');
});

// Handling Login request
app.post('/login/auth', (req,res) => {
    const index = findPeople(req.body.name);
   if(index != -1) {
        return  res.status(200).send(`<h1>Hello again, ${people[index].name}</h1>`);
   }
   res.status(401).send(`<h1>You're not an exisiting user.</h1>`) 
})
// Adding data to the api/person
app.post('/add', (req,res)=>{
    if(!req.body.name){
        res.status(401).send({success: false, person: req.body.name, msg:'Please Provid Username'})
    }
    if(addPeople(req.body.name)){
        res.status(201).send({success: true, person: req.body.name, msg: 'Successfully added user'});
    }else{
        res.status(401).send({success: false, person: req.body.name, msg:'User already Exists'})
    }
})
// Fetching data from the api/person
app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people})
})

// express listen
app.listen(5000,() => {
    console.log('listening on port 5000');
});


// Helper Functions
// Check and return for person if present
const findPeople =(name) => {
    let found = people.findIndex((data) => name === data.name);
    return found;
}
// Add Person to the api
const addPeople = (name) => {
    let found = findPeople(name);
    if (found == -1){
        people.push({id:people[people.length - 1].id + 1, name});
        return true;
    }
    return false;
}
