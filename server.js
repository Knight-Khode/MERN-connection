const express = require("express")
const user = require('./routes/api/users')
const database = require('./config/db')

database()
const app = express()
app.use(express.json())
app.use('/api/users',user)


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Listening to port ${PORT}...`))