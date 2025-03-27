const posts = require("../arrray");
//console.log(posts);
const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.json(posts);
    //res.send("Lista dei post");  
});

router.put("/:id", (req, res) =>{
  const { id } = req.params;
  res.send(`modifica tutto il dolce alla posizione ${id}`) 
});

router.post("/", (req, res) =>{
  res.send(`creo un nuovo dolce con post`) 
});

router.delete("/:id", (req, res) =>{
  const { id } = req.params;
  res.send(`cancello questo post con delete ${id}`) 
});

router.patch("/:id", (req, res) =>{
  const { id } = req.params;
  res.send(`modifica parziale del dolce alla posizione ${id}`) 
});

router.get("/index", (req, res) =>{

  res.json(posts);
  res.send("Lista dei post");
    
});

router.get("/:slug", (req, res) => {

  const currentSlug = req.params.slug;

  const currentPost = posts.find(posts => posts.slug === currentSlug);

  currentPost ? res.json(currentPost) 
              : res.json("inserisci uno slug valido");
  });

module.exports = router;

