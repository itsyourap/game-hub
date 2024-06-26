import {Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    return <Grid
        templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`

        }}
        templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
        }}
    >
        <GridItem area='nav'>
            <NavBar/>
        </GridItem>
        <Show above='lg'>
            <GridItem paddingX={5} area='aside'>
                <GenreList onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}/>
            </GridItem>
        </Show>
        <GridItem area='main'>
            <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
    </Grid>
}

export default App
