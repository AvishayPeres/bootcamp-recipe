$("#search!").on("click", function () {

    let food = $("#food").val()
    $.post(`/recipes`, food, function (recipes) {
        recipes.forEach(r => {
            r.ingredients = r.ingredients.split(` `)
        })
    })
})
