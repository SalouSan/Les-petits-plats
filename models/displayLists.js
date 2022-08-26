export class Lists {
    constructor(json){
        Object.assign(this, json)
    }

    ingredientsList(){
        return this.ingredients.map(ingredient=> 
        `<option> ${ingredient.ingredient} </option>`
        ).join("")
    }
    appliancesList(){
        return `<div class="options">
        ${this.appliances.map(appliance=>
            `<option> ${appliance} </option>`
            ).join("")}
        </div>
        `
    }
    ustensilsList(){
        return `<div class="options">
        ${this.ustensils.map(ustensil=>
            `<option> ${ustensil} </option>`
            ).join("")}
        </div>
        `
    }

}