import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import type { GameQuery } from '../App.tsx';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);
  if (error) return <Text>{error.message}</Text>;
  const fetchedGames =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner />}
      dataLength={fetchedGames}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={5}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
export default GameGrid;
