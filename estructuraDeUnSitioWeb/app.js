const express = require ("express");
const app = express ();
const path = require ("path");

app.use(express.static("public"))

app.listen (3030, ()=>{
console.log ("Mi servidor express esta funcionando en port 3030")
});

app.get('/', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/src/home.html"))
});