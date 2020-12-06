const mongoose = require('mongoose')

module.exports = ()=>{
    mongoose.connect('mongodb+srv://yascan:yascan46@yascan.ztwfp.mongodb.net/yascan?retryWrites=true&w=majority', {useNewUrlParser: true})

    mongoose.connection.on('open',()=>{
        console.log('MongoDB: Connected')
    })

    mongoose.connection.on('error', (err)=>{
        console.log('MongoDB: error', err)
    })

    mongoose.Promise = global.Promise;
}