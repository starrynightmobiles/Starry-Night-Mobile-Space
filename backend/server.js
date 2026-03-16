
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/starrynights")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/api/cart", require("./routes/cart"))
app.use("/api/orders", require("./routes/orders"))
app.use("/api/referral", require("./routes/referral"))
app.use("/api/rewards", require("./routes/rewards"))

app.get("/", (req,res)=>{
 res.send("Starrynights API running")
})

app.listen(5000, ()=>{
 console.log("Server running on port 5000")
})
