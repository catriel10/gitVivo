const express = require ("express");
const app = express ();
const path = require ("path");
const publicPatch = path.resolve (__dirname,'./public')
app.use(express.static(publicPatch))

app.listen (3030, ()=>{
console.log ("Mi servidor express esta funcionando en port 3030")
});

app.get('/', (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/home.html"))
});