require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const CheeseRouter = require('./controllers/cheese')

// APP
const app = express();

// MIDDLEWARE
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())



// ROUTES
app.use('/cheese', CheeseRouter)


app.use('/', (req, res) => {
    res.send('hello world')
})


// SERVER LISTENER
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening to port ${PORT}`))