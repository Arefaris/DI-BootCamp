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