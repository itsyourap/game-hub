import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7890aa3e5dfe4212b2d8d490d625cb91'
    }
})