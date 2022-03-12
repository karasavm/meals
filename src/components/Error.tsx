import { Box, Text } from "@chakra-ui/react";
type ErrorProps = {
  message?: string;
};
export default function Error({ message = "Unhandled error" }: ErrorProps) {
  return (
    <Box display="flex" flex={1} alignItems="center" justifyContent="center">
      <Text>Something went wrong! {message}</Text>
    </Box>
  );
}
