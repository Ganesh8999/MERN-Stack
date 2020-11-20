import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.port || 8001;
const connection_url = `mongodb+srv://admin:s0HLm47uyJezvoAV@romancedatecluster.agwfe.mongodb.net/<romancedatedb>?retryWrites=true&w=majority`;

// Middlewares

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello NodeJs Program");
});

//Listener
app.listen(port, () => console.log(`listening on localhost :  ${port}`));
