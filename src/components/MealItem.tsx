import { Meal } from "../types";

type MealItemProps = Meal;
export default function MealItem({ title, thumb, ingridients }: MealItemProps) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{ingridients.join(", ")}</div>
      <img src={thumb} style={{ width: 200, height: 200 }} alt="" />
    </div>
  );
}
