const express = require('express');
const app = express();
const {people} = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Login Page
app.get('/login', (req,res) => {
   res.status(200).sendFile(__dirname+'/methods-public/login.html');
});

// Handling Login request
app.post('/login/auth', (req,res) => {
    const person = findPeople(req.body.name);
   if(!person) {
        return  res.status(200).send(`<h1>Hello again, ${person.name}</h1>`);
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
        res.status(401).send({success: false, msg:'User already Exists'})
    }
})
// Fetching data from the api/person
app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people})
});

// PUT method
app.put('/api/people/:id',(req,res) =>{
    const {id} = req.params;
    const {name} = req.body;
    const person = findPeopleid(id);
    if(!person){
        return res.send({sucess: false, person_id: id, msg: 'Please Provide correct id.'})
    }
    const old_name = findPeopleid(id).name;

        res.send({success: true, person_id: id, msg: `The person name '${old_name}' is changed to '${name}'`, data:updatePeopleName(id, name)}); 
})

// express listen
app.listen(5000,() => {
    console.log('listening on port 5000');
});


// Helper Functions
// Check and return for person if present
const findPeopleid =(id) => {
    return people.find((person) => person.id === Number(id));
}

const findPeople = (name) =>{
    return people.find((person) => person.name === name);
}

const updatePeopleName = (id,name) =>{
    const newPeople = people.map((person) =>{if(person.id === id){person.name = name} return person});
    return newPeople
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
