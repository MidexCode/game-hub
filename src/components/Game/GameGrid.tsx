import { useGames, type Game, type Platform } from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../Card/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardConatiner/GameCardContainer";
import type { Genre } from "@/Hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 4 }}
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
