import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/Game/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import type { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import type { Platform } from "./Hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>

      <GridItem
        gridArea="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={"10px"}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem gridArea="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
