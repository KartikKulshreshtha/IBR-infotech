const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost:27017/ibr").then(() =>{
    console.log("Connected to Db successfully");
    app.listen(3000, () => {
        console.log(`Listening on PORT ${3000}`)
    })
})


// Database
const Schema = mongoose.Schema
const questionSchema = new Schema({
    name: {type: String, required: true},
    dob: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    interests: {type: String, required: true}
})

const Questions = mongoose.model("questions", questionSchema);


// API's

app.post("/api/add", async(req, res) => {
    const {name, dob, state, country, interests} = req.body;
    try {
        await Questions.create({name, dob, state, country, interests}).then((response) => {
            res.status(201).json({success: true, message: "Submited successfully"})
        })
    } catch (error) {
        res.status(400).json({success: false, message: error})
    }
})