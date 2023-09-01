import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";


const GameGrid = () => {
    const {data: games, error, isLoading} = useGames()

    return (
        <>
            {error && <Text color='red'>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={10} spacing={10}>
                {
                    isLoading && [...Array(20)].map((x) => (
                        <GameCardSkeleton key={x}/>
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