import { useEffect, useRef, useState, type FormEvent } from 'react'
import { RecipeItem } from './model/RecipeItem'
import './App.css'

function App() {
  const [recepies, setRecepies] = useState<RecipeItem[]>([])
  const title = useRef<HTMLInputElement>(null)
  const ingredients = useRef<HTMLTextAreaElement>(null)
  const instructions = useRef<HTMLTextAreaElement>(null)


  const prepareRecepies = (e: FormEvent)=>{
    e.preventDefault()

    if(title.current?.value && ingredients.current?.value && instructions.current?.value){
      const RecArray = ingredients.current?.value.split("\n")
      const newRecepie = new RecipeItem(Date.now(), title.current?.value, RecArray, instructions.current?.value, false)
      
      setRecepies(prev => [...prev, newRecepie])
    }
    
  }

  return (
    <>
  <form onSubmit={(e) => prepareRecepies(e)}>
    <input ref={title}placeholder="Recipe Title" required /><br></br>
      <textarea
      ref={ingredients}
      id="ingredients"
      placeholder="Enter ingredients (one per line)"
      required
      ></textarea>
    <textarea
      ref={instructions}
      id="instructions"
      placeholder="Enter cooking instructions"
      required
    ></textarea>
    <button type="submit">Add Recipe</button>
  </form>

  <div>
    {
      recepies && recepies.map((rec: RecipeItem) => {
        return <div style={rec.isFavorite ? {backgroundColor: "green"} : {}}>
            <div>{rec.title}</div>
            <div>{rec.ingridients.join(", ")}</div>
            <div>{rec.instructions}</div>
            <button onClick={()=> {
              setRecepies(prev => {
                return prev.map(recepie => {
                  return recepie.id === rec.id ? {...recepie, isFavorite: !recepie.isFavorite} : recepie
                })
              })
            }}>Favorite</button>
          </div>
      })
    }
  </div>
  <button>Clear All Recipes</button>
    </>
  )
}

export default App


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


export class RecipeItem {

    id: number
    title: string
    ingridients: string[]
    instructions: string
    isFavorite: boolean

    constructor (
        id: number,
        title: string,
        ingridients: string[],
        instructions: string,
        isFavorite: boolean
    ) {
        this.id = id
        this.title = title
        this.ingridients = ingridients
        this.instructions = instructions
        this.isFavorite = isFavorite
    }
          
}
