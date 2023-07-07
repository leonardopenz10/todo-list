const PORT = 3000;
const express = require('express')
const routes = express.Router()
const path = require('path')
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res){
    return res.render("index.html")
})

app.listen(PORT, ()=> {
    console.log("Server running on Port", PORT)
})
