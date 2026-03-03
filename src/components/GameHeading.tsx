import { Heading } from '@chakra-ui/react';
import type { GameQuery } from '../App.tsx';
import useGenres from '../hooks/useGenres.ts';
import usePlatforms from '../hooks/usePlatforms.ts';

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId,
  );

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return <Heading as="h1">{heading}</Heading>;
};
export default GameHeading;
