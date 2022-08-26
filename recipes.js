import { Recipes } from "./models/displayRecipes.js"
import { Lists } from "./models/displayLists.js"
import { filterElements } from "./models/searchBarFilter.js"

// Get all recipes

async function getRecipes () {
    let response = await fetch ("data/recipes.json");
    const data = await response.json();
    console.log(data)

    
   
    // Display lists of filter items 
    let listsItems = data.map(element => new Lists(element));
    let ingredientsList = listsItems.map(list => {
        return list.ingredientsList();
    }).join(" ")

    let options = document.querySelectorAll(".options")
    for(let i=0; i<options.length; i++){
        options[0].innerHTML = ingredientsList;
    }

    function displayList (method,n){
        let listsItems = data.map(element => new Lists(element));
        let options = document.querySelectorAll(".options")
        let ingredientsList = listsItems.map(list => {
            return list.ingredientsList();
        }).join(" ")
        for(let i=0; i<options.length; i++){
            options[n].innerHTML = method;
        } 
    }

    function appliances(){
        let appliancesList = listsItems.map(list =>{
            return list.appliancesList()
        }).join("");
        return appliancesList
    }

    function ustensils(){
        let ustensilsList = listsItems.map(list =>{
            return list.ustensilsList()
        }).join("")
        return ustensilsList
    }
    // Remove duplicate from lists

    let optionItems = document.querySelectorAll("option")
    let a = []
    for (let i=0; i<optionItems.length; i++){
        let items = optionItems[i].innerText
        a.push(items)
        console.log(a);
        let uniqArray = new Set(a)
        console.log(uniqArray)

    }
    
    // Display recipes by default
    
    let recipes = data.map(element => new Recipes(element))
    let gallery = recipes.map(element =>{
        return element.displayRecipes();
    }).join("")
    let section = document.querySelector("section");
    section.innerHTML = gallery ;

    // Search bars event listener
    const searchBar = document.querySelector("input")
    searchBar.addEventListener("keyup", (e)=>{
        const characterSearched = e.target.value;
        const recipesCards = document.querySelectorAll(".recipes_card")
        filterElements(characterSearched, recipesCards);
    })
    let ingredientSearchBar = document.querySelector(".ingredients_search-bar")
    ingredientSearchBar.addEventListener("keyup", (e) => {
        let stringSearched = e.target.value
        let theOptions = document.querySelectorAll("option")
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
                
            })
            
        }
        filterElements(stringSearched,theOptions)
        
    })
    
}
getRecipes()
   





