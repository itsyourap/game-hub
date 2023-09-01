import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface DataResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController()
        apiClient.get<DataResponse<T>>(endpoint, {signal: controller.signal})
            .then(res => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError)
                    return

                setError(err.message)
                setLoading(false)
            })

        return () => controller.abort()
    }, [endpoint]);

    return {data, error, isLoading}
}

export default useData