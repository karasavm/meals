import { Meal } from "../types";
import { IngidientsApi, MealApi } from "./types";

function isIngridient(key: string): key is keyof IngidientsApi {
  return key.includes("strIngredient");
}

function parseIngridients(ingridients: IngidientsApi): Meal["ingridients"] {
  return Object.keys(ingridients)
    .filter(isIngridient)
    .map((key) => ingridients[key]);
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
    ingridients: parseIngridients(ingrindients),
  };
}

export { parseMeal };
