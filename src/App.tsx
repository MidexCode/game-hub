import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav" bg="coral">
        Nav
      </GridItem>

      <GridItem
        gridArea="aside"
        bg="gold"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>

      <GridItem gridArea="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
