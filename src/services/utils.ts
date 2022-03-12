import { Meal } from "../types";
import { IngidientsApi, MealApi } from "./types";

function isIngredient(key: string): key is keyof IngidientsApi {
  return key.includes("strIngredient");
}

function parseIngredients(ingredients: IngidientsApi): Meal["ingredients"] {
  return Object.keys(ingredients)
    .filter(isIngredient)
    .map((key) => ingredients[key]);
}

function parseMeal({
  idMeal,
  strMealThumb,
  strMeal,
  ...ingrindients
}: MealApi): Meal {
  return {
    id: idMeal,
    thumb: strMealThumb,
    title: strMeal,
    ingredients: parseIngredients(ingrindients),
  };
}

export { parseMeal };
