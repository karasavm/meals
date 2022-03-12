import { Meal } from "../types";
import { Box, Image, Text, Divider } from "@chakra-ui/react";

type MealItemProps = Meal;
export default function MealItem({ title, thumb, ingredients }: MealItemProps) {
  return (
    <Box display="flex" p="2">
      <Box flexBasis="25%">
        <Image
          src={thumb}
          alt=""
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        flexBasis="75%"
        width={0}
      >
        <Text pl="4" fontSize="">
          {title}
        </Text>
        <Divider />
        <Text
          noOfLines={2}
          pl="4"
          textAlign={"left"}
          fontSize="lg"
          width="100%"
        >
          {ingredients.join(", ")}
        </Text>
      </Box>
    </Box>
  );
}
