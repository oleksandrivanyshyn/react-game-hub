import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import type { GameQuery } from '../App.tsx';
interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer key={s}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
