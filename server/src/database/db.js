import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/Blog`)
        const db = mongoose.connection
        db.on('connected',()=>{
           console.log(db.host)
        })
       // console.log("MongoDB Connected ! host", connectionInstance);
    } catch (error) {
        console.log("Error in connecting DB", error)
        process.exit(1)
    }
}

export default connectDB