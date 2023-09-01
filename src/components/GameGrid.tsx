import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {Genre} from "../hooks/useGenres.ts";

interface Props {
    selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}: Props) => {
    const {data: games, error, isLoading} = useGames(selectedGenre)

    return (
        <>
            {error && <Text color='red'>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={10} spacing={5}>
                {
                    isLoading && [...Array(20)].map((_x, i) => (
                        <GameCardSkeleton key={i}/>
                    ))
                }
                {
                    games && games.map(game => (
                        <GameCard key={game.id} game={game}/>
                    ))
                }
            </SimpleGrid>
        </>
    );
};

export default GameGrid;