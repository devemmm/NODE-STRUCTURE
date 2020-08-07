const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    return console.log(`connected to Student Database`)
}).catch((error) => {
    return console.log('Unable to connect to Database Make sure Your Db is on')
})