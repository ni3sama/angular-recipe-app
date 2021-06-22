import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list/shopping-list.service"
import { Recipe } from "./recipe.model"

@Injectable()

export class RecipeService{
    recipeChanged = new Subject<Recipe[]>()
    private recipes: Recipe[] = [
        new Recipe('Chicken fillet salad', 
        'A super tasty and healthy meal.',
        'https://cdn.stocksnap.io/img-thumbs/280h/fryingpan-food_DFZV36VZW4.jpg',
        [
            new Ingredient('Chicken Breast', 1),
            new Ingredient('Cabbage', 1),
            new Ingredient('Tomato', 1),
        ]),
        new Recipe('Chicken Burger', 
        'Super tasty big meal.',
        'https://cdn.stocksnap.io/img-thumbs/280h/bread-bun_UGX0HQQPWI.jpg',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Bread Bun', 2),
            new Ingredient('Tomato', 1),
            new Ingredient('Onion', 1),
            new Ingredient('Cheese Slice', 1),
            new Ingredient('Pickle', 1),
        ]),
        new Recipe('Apple Pie', 
        'A super tasty dessert.',
        'https://cdn.stocksnap.io/img-thumbs/280h/homemade-pie_TUKUBAALHJ.jpg',
        [
            new Ingredient('Apple', 2),
            new Ingredient('Cashew', 10),
            new Ingredient('Almond', 10),
        ]),
      ]

      constructor(private slService: ShoppingListService){ }

      getRecipe(){
          return this.recipes.slice()
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
      }

      getRecipes(index: number){
        return this.recipes[index]
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe)
        this.recipeChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe
        this.recipeChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1)
        this.recipeChanged.next(this.recipes.slice())
      }
}