import { RecipeItem } from "./RecipeItem";
export class RecipeCollection {
    recipes: RecipeItem[]

    constructor(
        recipes: RecipeItem[]
    ){
        this.recipes = recipes
    }

    addRecipe(recipe: RecipeItem): void {
        this.recipes.push(recipe)
    }

    removeRecipe(id: number){
        const newRecipes = this.recipes.filter(recipe => recipe.id != id)
        this.recipes = newRecipes
    }

    toggleFavorite(id: number){
        const newRecipes = this.recipes.map((recipe)=> {

            if (recipe.id === id) {
                recipe.isFavorite = !recipe.isFavorite
                console.log(1)
                return recipe
            }else{
                return recipe
            }
        })

        this.recipes = newRecipes
}

    saveToLocal(recepi: RecipeItem){
        localStorage.setItem(`${recepi.id}`, `Title: ${recepi.title} Ingridients: ${recepi.ingridients} Instructions: ${recepi.instructions}`)
    }

    loadFromLocal(id: number){
        const recepie = localStorage.getItem(`${id}`)
        console.log(recepie)
    }
}