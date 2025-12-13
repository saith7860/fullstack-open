import express from 'express';
import personsData from './personsData.js';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors'
const port=3001;
// console.log(personsData);
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cors())
//root route
app.get("/",(req,res)=>{
  res.send('root is working');
})
//get request for persons
app.get("/api/persons",(req,res)=>{
  res.json(personsData);
})
//info route
app.get("/info",(req,res)=>{
    const currentDate=new Date();
    const iso8601format=currentDate.toLocaleString();
    // console.log(req);
    
    res.send(`<h4>PhoneBook has info for ${personsData.length} people</h4> 
      <p>${iso8601format} </p>  
        `)
})
//get unique recourse based on id
app.get("/api/persons/:id",(req,res)=>{
    const id=req.params.id;
    const person=personsData.find((per)=>per.id==id);
    if (person) {
      res.send(person);  
    }
    else{
        res.status(404).send(`Perosn having id ${id} is not found`)
    }
})
//post request for creating a new person
app.post('/api/persons', (req, res) => {
const { name, number } = req.body
if (!name || !number) {
return res.status(400).json({ error: 'name or number missing' })
}
if (personsData.find(p => p.name === name)) {
return res.status(400).json({ error: 'name must be unique' })
}
const person = {
id: Math.floor(Math.random() * 1000000).toString(),
name,
number
}
personsData.push(person)
res.json(person)
})
//detete http request 
app.delete("/api/persons/:id",(req,res)=>{
    const id=String(req.params.id);
    console.log(id);
    
   const newPersonData= personsData.filter(per=>per.id!==id);
    console.log(newPersonData);
    res.status(204).end();
    // res.send("Delted sucessfully");
})

//Port Listening on 3000
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
})