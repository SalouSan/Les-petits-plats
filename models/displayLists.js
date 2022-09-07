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
        let applianceArray = []
        applianceArray.push(this.appliance)
        return applianceArray.map(appliance=>
            `<option> ${appliance} </option>`
            ).join("")
        
    }

    ustensilsList(){
        return this.ustensils.map(ustensil=>
            `<option> ${ustensil} </option> </br>`
            ).join("")
    
    }

}