const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const api = require('./api')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)




const port = 8080



// router.get(`/sanity/`, function(req, res){
//     res.send("ok")
// })

app.listen(port, function () {
    console.log(`port ${port} ok`)
})