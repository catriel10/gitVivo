const express = require('express')
const app = express()
const path = require('path')


// definimos la carpeta que devuelve archivos estáticos
app.use(express.static('public'))

app.listen(3030, () => {
    console.log('El servidor ya está corriendo en el puerto 3030')
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'))
})




