require('dotenv').config();

const express = require('express');

const cors = require('cors');
const colors = require('colors');

const connectDb = require('./config/db');
connectDb()

const goalRouter = require('./router/router');

const errorHandler = require('./middleware/errorMiddleware')
const app = express();




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))






app.use('/api/goals', goalRouter)



app.use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server runs on port:${PORT}😄`);
})