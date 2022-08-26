export function filterRecipes(recipes, term){
    let filteredRecipes = []

    for(let recipe of recipes){
        if(recipe.name.toLowerCase().includes(term.toLowerCase())){
            filteredRecipes.push(recipe)
        }
    }
    return filteredRecipes
}
