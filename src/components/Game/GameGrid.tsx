import { useGames, type Game } from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../Card/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardConatiner/GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>Error: {error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={5} gap={10}>
      {isLoading
        ? skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))
        : games?.map((game: Game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
