import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    country:{
        type: String,
    },
});

const User = mongoose.model("User", userSchema);
export default User;