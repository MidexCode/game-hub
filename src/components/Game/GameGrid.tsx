import { useGames, type Game } from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../Card/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardConatiner/GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 3 }}
      padding={5}
      gap={3}
    >
      {isLoading
        ? skeletons.map((skeleton) => (
            <GameCardContainer key={`skeleton-${skeleton}`}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : data?.map((game: Game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
