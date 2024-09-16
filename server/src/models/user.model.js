import mongoose ,{Schema} from "mongoose"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            index: true,
            trim: true
        },

        password: {
            type: String,
            required: [true, "Password is requires"]
        }, 
    },
    {
        timestamps: true
    }

)
 const User = mongoose.model("User", userSchema);

 export default User