import useGames from "@/Hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
