export function filterRecipes(recipes, term){
    let filteredRecipes = []

    for(let recipe of recipes){
        if(recipe.name.toLowerCase().includes(term.toLowerCase())){
            filteredRecipes.push(recipe)
        }
    }
    return filteredRecipes
}
export function filterOptions (option, letters) {
    if(letters.length > 2) {
        for(let i=0; i<option.length; i++){
          if (option[i].textContent.toLowerCase().includes(letters)) {
                option[i].style.display = "block"
            }
            else {
                option[i].style.display = "none"
            }
    }
    }
    
}