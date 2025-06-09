import type { Game } from "../../Hooks/useGames";
import { Card, Image, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width={"300px"}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        objectFit="cover"
        width="100%"
        height="200px"
        loading="lazy"
      />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>

        <HStack justifyContent="space-between" mt={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
