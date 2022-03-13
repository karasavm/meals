type Nums =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

type IngredientKeys = `strIngredient${Nums}`;

export type IngidientsApi = {
  [K in IngredientKeys]: string;
};

export interface MealApi extends IngidientsApi, Record<string, unknown> {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
