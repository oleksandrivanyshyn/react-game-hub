import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
interface ExpandableTextProps {
  children: string;
}
const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children.substring(0, limit) : children;
  return (
    <Text>
      {summary}...{' '}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
