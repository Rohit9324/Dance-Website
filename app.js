const express = require("express");
const path = require("path");
const app = express();

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get("/", (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get("/Contact", (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})

// START THE SERVER
app.listen(8080, function(){
    console.log("server is running at port"+8080);
});
