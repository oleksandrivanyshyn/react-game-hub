import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import type { Genre } from '../hooks/useGenres.ts';
interface GameGridProps {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
