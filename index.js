require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


const personRoute = require('./routes/personRoutes')

app.use('/person', personRoute)



app.get('/', (req, res) => {

   

    res.json({message: 'Hello World'})


})




const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)



mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-cluster.oiwtlph.mongodb.net/bancodaapi?retryWrites=true&w=majority&appName=API-Cluster`)
    .then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})

    .catch((error) => {
    console.log(error)

})












