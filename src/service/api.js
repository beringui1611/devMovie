import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '3af44a20ba9dc94186223102dc00c995',
        language: 'pt-BR',
        page: 1
    }
})

export default api