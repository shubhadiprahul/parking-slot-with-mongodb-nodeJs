const express = require('express')
const app = express()
const router = require('./routes/router')
const morgan = require('morgan')
require('dotenv').config()
const port = process.env.PORT || 2022

// DataBases
require('./database/db')

//middlewears
app.use(morgan('dev'))
app.use(express.json())
app.use('/', router)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
