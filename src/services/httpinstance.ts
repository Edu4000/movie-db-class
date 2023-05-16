import axios from 'axios'
import Config from 'config'

export const httpinstance = axios.create({
    baseURL: Config.API_URL,
})

// Add a receptor
httpinstance.interceptors.request.use(
    async (config) => {
        const newConfig = {...config}
        // newConfig.headers.Authorization = `Bearer ${bearerToken}`
        // newConfig.headers("X-Version") = "1.0.0"
        // newConfig.headers("X-Signature") = "demoTokens"
        return newConfig
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Adda responce interceptor
httpinstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)