import type { Game } from '../entities/Game.ts';
import { SimpleGrid, Text } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem.tsx';
import CriticScore from './CriticScore.tsx';

interface GameAttributesProps {
  game: Game;
}
const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
