import mongoose from "mongoose";

const InfList = new mongoose.Schema({
    days: {type: Array, required: true},
    hours: {type: Object, required: true}
})

export default mongoose.model('InfList', InfList)