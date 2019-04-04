const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const api = require('./api')
const app = express()


app.get(`/sanity`, function (req, res) {
    res.send("ok")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)




const port = 8080

app.listen(port, function () {
    console.log(`port ${port} ok`)
})