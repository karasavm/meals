import { Meal } from "../types";
import { Box, Image, Text } from "@chakra-ui/react";

type MealItemProps = Meal;
export default function MealItem({ title, thumb, ingredients }: MealItemProps) {
  return (
    <Box display="flex" p="2">
      <Box boxSize="150px">
        <Image src={thumb} alt="" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Text p="4" fontSize="3xl">
          {title}
        </Text>
        <Text p="4" fontSize="lg">
          {ingredients.join(", ")}
        </Text>
      </Box>
    </Box>
  );
}
