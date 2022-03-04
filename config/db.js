const mongoose = require('mongoose');


const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.URI);
        console.log(`database connected: ${conn.connection.host}😄`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


module.exports = connectDb