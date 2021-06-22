const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost/mern',{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('connected to mongodb...')
    }catch(ex){
        console.error(ex.message)
        process.exit(1)
    }
}

module.exports = connectDB