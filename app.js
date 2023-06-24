const express = require("express")
const app = express()
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Contact", {useNewUrlParser:true})
const path = require("path")
const bodyparser = require("body-parser")

let informationsSchema = new mongoose.Schema({
    name:String,
    phone: String,
    email: String,
    concern: String,
})

let informationsModel = mongoose.model("informations",informationsSchema);

app.use('/static', express.static('static'))
app.use(express.json());
app.use(express.urlencoded())


app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


app.get("/", (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get("/Contact", (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})

app.post("/contact",(req,res)=>{
    let data = new informationsModel(req.body);
    data.save().then(()=>{
        res.send("Saved Successfully")
    })
})

app.listen(8080);