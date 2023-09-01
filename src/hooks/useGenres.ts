import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Genre {
    id: number
    name: string
}

interface GenresResponse {
    count: number
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        const controller = new AbortController()
        apiClient.get<GenresResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenres(res.data.results)
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

    return {genres, error, isLoading}
}

export default useGenres