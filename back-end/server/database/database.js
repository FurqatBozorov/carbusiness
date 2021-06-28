const mongoose = require('mongoose');

const Connect = async()=>{
    try{
       const con = await mongoose.connect('mongodb://localhost:27017/carDB', { useNewUrlParser: true });
    }catch(err){
        console.log(err);
    }
}

module.exports = Connect;