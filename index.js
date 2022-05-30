const mongo = require('mongodb').MongoClient
const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')

const app = express()
app.use(cors())
app.use(express.json())

const url ='mongodb+srv://Cherie05:Password12@cluster0.tedtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options ={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

let menudb,customersdb

mongo.connect(url,options,(err,mongoClient) => { 
    if(err){
        console.error(err)
        return
    }
        
    app.listen(3000,() => console.log('app is listening on port 3000')) 
    
    console.log('We are connected!')

const db =mongoClient.db('restaurant')
customersdb = db.collection('customers')
menudb = db.collection('menu')


})




//get
app.get('/',(req,res) => res.status(200).send('Hey class!'))
//post

app.post('/',(req,res) => {
    
    console.log( 'this is the req',req.body)
    const dish1 = { name : 'leche de tigre'}
    
    menudb.insertOne(req.body)
    res.status (201).send('here is what the body has')

});


//patch
app.patch('/', (req,res) => {
    menudb
    .updateOne (req.body ({name :'leche de tigre'}), 
         {$set: 
            {name:'tequila',cost:30, stock: true}
        })
    .then (()=> res.status(200).send ('item was update'))
    });


//delete





