import { useParams } from 'react-router';
import useGame from '../hooks/useGame.ts';
import { Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText.tsx';
import GameAttributes from '../components/GameAttributes.tsx';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
