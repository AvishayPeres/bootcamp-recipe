const express = require('express')
const router = express.Router()
const req = require('request')


router.get(`/recipes/:food`, function (request, response) {
    // let ingsArr = []
    let food = req.params.food
    console.log(food)
    request(`http://www.recipepuppy.com/api/?q=${food}`, function (err, result) {
        let body = JSON.parse(result.body)
        let recipes = body.results
        response.send(recipes)
    })
    
})

module.exports = router