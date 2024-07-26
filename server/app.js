const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const authRoute =require("./routes/auth");
const verifyToken = require("./middleware/authMiddleware");
app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/", routes);
app.use("/", authRoute)

app.get("/loginuser", verifyToken, async (req, res) => {
  console.log("inside loginuser");
  
  console.log(req.username);
  res.json(req.username)
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/Enhanced_TaskManagement_system");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
