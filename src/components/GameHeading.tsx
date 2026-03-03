import { Heading } from '@chakra-ui/react';
import type { GameQuery } from '../App.tsx';
import useGenre from '../hooks/useGenre.ts';
import usePlatform from '../hooks/usePlatform.ts';

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return <Heading as="h1">{heading}</Heading>;
};
export default GameHeading;
