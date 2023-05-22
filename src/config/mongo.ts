import "dotenv/config"
import mongoose from "mongoose"

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    await mongoose.connect(DB_URI)
    .then(conn => {
        console.log('Mongo connected! on', DB_URI)
    })
    .catch(err => console.log(`Connection has error ${err}`))
}

export default dbConnect