export class Recipes {
    constructor(json){
        Object.assign(this, json)
    }
    
  
    displayRecipes() {
        return `<div class="recipes_card"> 
            <div class="rectangle"></div>
            <div class="recipes_items">
                <div class="titles">
                    <h1 class="card_name"> ${this.name}</h1>
                    <div class="card_time">
                        <img class="clock" src="icons/clock.svg"> <h2 class="time"> ${this.time} min </h2>
                    </div>
                </div>
                <div class="container">
                    <div class="ingredients">
                    ${this.ingredients.map(ingredient=>
                        `<p> <strong> ${ingredient.ingredient}: </strong> ${ingredient.quantity??""} ${ingredient.unit??""}</p>`    
                        ).join("")}
                    
                    </div>
                    <div class="description">
                        <p class="describe"> ${this.description} </p>
                    </div>
                </div>
            </div> 
        </div>`
    }
}

