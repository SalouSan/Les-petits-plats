import {filterRecipes} from "./models/searchBarFilter.js"
import {Recipes} from "./models/displayRecipes.js"
import {Lists} from "./models/displayLists.js"
let recipes = []

// Get all recipes 
async function getRecipes () {
    let response = await fetch ("data/recipes.json");
    recipes = await response.json();
    
}
// Display recipes on the page 
function displayRecipes (listRecipes) {
    let recipesDOM = "";
    for (let recipe of listRecipes){
        let recipeObj = new Recipes(recipe)
        recipesDOM+= recipeObj.displayRecipes()
    }
    document.querySelector("#recipesResult").innerHTML = recipesDOM;
}


getRecipes()

.then(()=>{
    displayRecipes(recipes)
    // Display list of filters items
    function displayListofFiltersItems (listRecipes) {
        for (let recipe of listRecipes) {
            let list = new Lists(recipe)
            document.querySelector("#option1").innerHTML= list.ingredientsList()
            document.querySelector("#option2").innerHTML= list.appliancesList()
            document.querySelector("#option3").innerHTML= list.ustensilsList()
        }
    }

    displayListofFiltersItems(recipes)
   
        
        
    const searchBar = document.querySelector(".search_bar input")
    // Add event listener on main search bar
    searchBar.addEventListener("keyup", (e)=>{
        if(e.target.value.length > 2){
            let filteredRecipes = filterRecipes(recipes, e.target.value)
            displayRecipes(filteredRecipes)
        }
    })
})
