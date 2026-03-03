import { SimpleGrid, Image } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots.ts';
interface GameScreenshotsProps {
  gameId: number;
}
const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {screenshots?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
