const mongoose=require('mongoose')
require('dotenv').config()

const db = process.env.DB_NAME
mongoose.connect(db)
.then(data=>{
    console.log("DB connection sucessfully....");
})
.catch(err=>{
    console.log(err);
})