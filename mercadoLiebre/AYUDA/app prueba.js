const express = require ("express");
const app = express ();
const path = require ("path");

app.use(express.static("public"))

app.use( express.static(path.resolve (__dirname,"./public")));

app.listen (4444, ()=>{
    console.log ("Mi servidor ML GRUPO 4 esta funcionando en port 4444")
    });
    
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/views/home.html'));
    })
    
    app.get('/login', (req, res) => {
            res.sendFile(path.join(__dirname, '/views/login.html'));
    })

    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, '/views/register.html'));
    });
    
