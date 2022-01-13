const express=require('express')
const app=express();
// const MongoClient = require('mongodb').MongoClient
// const fs = require('fs');
// const ca = [fs.readFileSync("rds-combined-ca-bundle.pem")];


// MongoClient.connect(
//         url, {
//             sslValidate: true,
//             sslCA: "",
//             useNewUrlParser: true
//         },
//         function (err,client) {
//             console.log(err+" , "+ client);
//         });

app.get('/',(req,res,next)=>{
    res.send("This my first app")
})
app.get('/users',(req,res,next)=>{
    res.send('Users')
})
app.listen(3000,()=>{

    console.log("app listening")
})