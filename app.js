const router = require("./router/posts");
const posts = require("./router/posts");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/posts", posts);


app.listen(port, () => {
console.log("sono un server attivo sulla porta"+ " " + port);

});


