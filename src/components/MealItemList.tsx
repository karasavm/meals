import { Meal } from "../types";
import MealItem from "./MealItem";

type MealItemListProps = {
  meals: Meal[];
};

export default function MealItemList({ meals }: MealItemListProps) {
  return (
    <div>
      {meals.map((meal) => (
        <MealItem {...meal} />
      ))}
    </div>
  );
}
