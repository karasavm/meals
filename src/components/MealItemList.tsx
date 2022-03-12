import { Meal } from "../types";
import MealItem from "./MealItem";
import { Box } from "@chakra-ui/react";

type MealItemListProps = {
  meals: Meal[];
};

export default function MealItemList({ meals }: MealItemListProps) {
  return (
    <Box pt="8">
      {meals.map((meal) => (
        <MealItem {...meal} />
      ))}
    </Box>
  );
}
