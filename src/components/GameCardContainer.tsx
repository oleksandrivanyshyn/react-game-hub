import { Box } from '@chakra-ui/react';

interface GameCardContainerProps {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.15s ease-in',
      }}
      width="100%"
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};
export default GameCardContainer;
