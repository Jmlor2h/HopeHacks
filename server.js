"use strict";
const mongoose = require("mongoose");
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const { fileURLToPath } = require('url');
const { dirname } = require('path');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();




const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "/client")))

const port = 3000;

//routes here
app.get("/", function(req,res){
  res.sendFile(__dirname + "/client/index.html");
});
//here we are caling our api key with a get request
app.get("/", async (req, res) => {
  let response = await axios.get(
    "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality", {
      headers: {
        "X-RapidAPI-Key": "b8c7b308d3msh5b11ef2c6240067p1b14e8jsn16d0721b371d",
        "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
      },
    }
  );
  res.send(response.data);
});

app.get("/:city", async (req, res) => {
  const city = req.params.city;
  let response = await axios.get(
    "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" + city, {
      headers: {
        "X-RapidAPI-Key": "b8c7b308d3msh5b11ef2c6240067p1b14e8jsn16d0721b371d",
        "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
      },
    }
  );
  res.send(response.data);
});

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, {useUnifiedTopology: true});
// create schema
const contactData = {
    fullname: String,
    email: String,
    subject: String,
    message: String
}
const cData = mongoose.model("cData", contactData);

app.post("/contact", function(req,res) {
    let newCData = new cData({
        fullname: req.body.fullname,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    newCData.save();
    res.redirect('/');
})

//here is where we will be using our port

app.listen(port, (err) => {
  if (err) return err;
  console.log(`Listening on port ${port}`);
});

