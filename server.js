const { MongoClient}  = require("mongodb");

const dbUrl = "mongodb://localhost:27017";

MongoClient.connect(dbUrl, (err, db) => {
    if (err) {
        console.error("Error connecting to database: ", err);
        return;
    }
    const database = db.db("Human-Resorse")
    console.log("Connected to database");

//     database.collection("employee").find({salary:{$gt:30000}}).toArray((err,success)=>{
//         if(err){
//             console.error(err)
//             return;
//         }
//         console.log(success)

// })
// database.collection("employee").find({Grayr:2015,exp:{$gt:1}}).toArray((err,success)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log(success)

// })
database.collection("employee").updateMany({salary:{$gt:70000}},{$set:{salary:65000}}).toArray((err,success)=>{
    if(err){
        console.error(err)
        return;
    }
    console.log(success)

})
})