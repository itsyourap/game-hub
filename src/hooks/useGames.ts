import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

interface GamesResponse {
    count: number
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        const controller = new AbortController()
        apiClient.get<GamesResponse>('/games', {signal: controller.signal})
            .then(res => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError)
                    return

                setError(err.message)
                setLoading(false)
            })

        return () => controller.abort()
    }, []);

    return {games, error, isLoading}
}

export default useGames