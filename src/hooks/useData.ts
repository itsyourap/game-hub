import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";

interface DataResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        setData([])
        const controller = new AbortController()
        apiClient.get<DataResponse<T>>(endpoint, {
            ...requestConfig,
            signal: controller.signal
        })
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ? [...deps] : []);

    return {data, error, isLoading}
}

export default useData