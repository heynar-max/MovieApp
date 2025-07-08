import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'cd6e3e29ba53644d9993e39f3d20fa87',
        language: 'es'
    }
});