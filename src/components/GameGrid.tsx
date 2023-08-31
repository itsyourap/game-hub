import React, {useEffect, useState} from 'react';
import apiClient from "../services/api-client.ts";
import {Text} from "@chakra-ui/react";

interface Game {
    id: number
    name: string
}

interface GamesResponse {
    count: number
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<GamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    }, []);

    return (
        <>
            {error && <Text color='red'>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;