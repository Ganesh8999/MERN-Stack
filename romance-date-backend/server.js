import express from "express";
//import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.port || 8001;

// Middlewares

//DB Config

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello NodeJs Program");
});

//Listener
app.listen(port, () => console.log(`listening on localhost :  ${port}`));
