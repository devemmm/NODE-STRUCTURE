const express = require('express')
const path = require('path')
require('./db/mongoDB')
const studentRouter = require('./router/student')

const app = express()
const port = process.env.PORT

// Set Public path
const publicDirectoryPath = path.join(__dirname, './public')
const viewPath = path.join(__dirname, './template/views')
const template = path.join(__dirname, './template')

app.set('view engine', viewPath)

app.use(express.json())
app.use(studentRouter)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})