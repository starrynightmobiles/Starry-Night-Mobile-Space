
const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
 userId:String,
 items:Array,
 total:Number,
 status:{
  type:String,
  default:"processing"
 }
},{timestamps:true})

module.exports = mongoose.model("Order", OrderSchema)
