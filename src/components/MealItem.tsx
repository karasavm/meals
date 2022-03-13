import { Meal } from "../types";
import {
  Box,
  Image,
  Text,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

type MealItemProps = Meal;
export default function MealItem({ title, thumb, ingredients }: MealItemProps) {
  const noOfLines = useBreakpointValue({ sm: 2, base: 1 });
  return (
    <Box display="flex" p="2">
      <Box flexBasis="25%">
        <Image
          src={thumb}
          alt={title}
          fallbackSrc="https://via.placeholder.com/550"
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
          noOfLines={noOfLines}
          pl="4"
          textAlign={"left"}
          fontSize="md"
          width="100%"
        >
          {ingredients.join(", ")}
        </Text>
      </Box>
    </Box>
  );
}
