require("dotenv").config();

const express = require("express");
var expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000 || process.env.port;

app.use(express.static("public"));

//Templating Engine
app.use(expressLayouts);
app.set("layout", "./layout/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
