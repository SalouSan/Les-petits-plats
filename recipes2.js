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
       let lists = listRecipes.map((element)=> new Lists(element))
       let ingredientList = lists.map((ingredient)=>{
        return ingredient.ingredientsList()
        }).join(" ")
        let optionsDiv = document.querySelector(".options")
        optionsDiv.innerHTML = ingredientList
       
    }

    displayListofFiltersItems(recipes)
    let theOptions = document.querySelectorAll("option")
    function addTag () {   
        for (let i=0; i<theOptions.length; i++){
            let stringOption = theOptions[i];
            stringOption.addEventListener("click", (e)=>{
                e.preventDefault();
                let searchResult = document.querySelector(".search_result")
                searchResult.style.display = "block";
                let small= document.querySelector(".result")
                small.style.display = "block";
                small.innerText = stringOption.innerText;
                let img = document.createElement("img")
                img.src="icons/close.svg";
                img.setAttribute("class", "close_btn");
                small.insertAdjacentElement("afterbegin", img)
                img.addEventListener("click", (e)=>{
                    searchResult.style.display = "none";
                })  
                
            })   
        }
    }

    
    // Add event listener on main search bar
    const searchBar = document.querySelector(".search_bar input")
    searchBar.addEventListener("keyup", (e)=>{
        if(e.target.value.length > 2){
            let filteredRecipes = filterRecipes(recipes, e.target.value)
            displayRecipes(filteredRecipes)
            displayListofFiltersItems(filteredRecipes)
        }
    })

   

    // Add event listener on filter search bar 

    const itemSearchBar = document.querySelectorAll(".item_search-bar")
    itemSearchBar.forEach((item)=>{
        item.addEventListener("keyup", (e) => {
            if (e.target.value.length > 2) {
                e.preventDefault()
                addTag()
            }    
        })
    })

    // 
    const chevron = document.querySelector(".chevron")
    const chevronUp = document.querySelector(".chevronUp")
    let content = document.querySelector(".content")
    chevron.addEventListener("mouseover", (e)=>{
        document.querySelector(".List_ingredients").style.display ="block"  
        content.style.width = "45%"
        content.style.marginLeft = "1.3%"
    })
    chevronUp.addEventListener("mouseover", (e)=>{
        document.querySelector(".List_ingredients").style.display ="none"
        content.style.width = "13%"
        content.style.marginLeft = "-2px"
        
    })


})
