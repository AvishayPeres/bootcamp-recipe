const express = require('express')
const router = express.Router()
const req = require('request')

router.get(`/recipes/:food`, function (request, response) {
    let food = req.params.food
    console.log(food)
    
    request(`http://www.recipepuppy.com/api/?q=${food}`, function (err, result) {
        let body = JSON.parse(result.body)
        let results = body.results
    
        response.send(results)
    })

    let recipes = []
    
    recipes = results.map(r => {
                let recipe = {}
                let ingredients = r.ingredients.split(',')
    
            for(let i in ingredients) {
                ingredients[i] = ingredients[i].trim()
            } 
            recipe.ingredients = ingredients

            return recipe
        })

        response.send(recipes)
    })    

module.exports = router