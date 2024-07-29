import axios from "axios";

export const giphyAxios = axios.create({
    baseURL: "https://api.giphy.com/v1",
    params: {
        api_key: import.meta.env.VITE_GIHPY_API_KEY
    }
})
