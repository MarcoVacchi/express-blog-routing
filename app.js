const posts = require("./router/posts");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//router 
app.use("/posts", posts);

// app.get("/posts", (req, res) => {
//     console.log("Server del mio blog");
//     res.send(posts);
// });
// //console.log(posts);

app.listen(port, () => {
console.log("sono un server attivo sulla porta"+ " " + port);

});


