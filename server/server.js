//App
//framework for server
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const db = require("./db");

const userRoutes = require("./resources/user/userRoutes");
const beverageRoutes = require("./resources/beverage/beverageRoutes");

//----------------------------End of Import-----------------

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json({ extended: false }));

server.use(logger("dev"));

server.use(cors());

server.get("/", (req, res) => res.send("API Running!"));

server.use("/api", userRoutes);
server.use("/api", beverageRoutes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
