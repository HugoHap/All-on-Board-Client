import axios from 'axios'

class MatchesService {

    constructor() {
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/matches` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllMatches = () => {
        return this.app.get('/')
    }

    createMatch = match => {
        return this.app.post(`/create`, match)
    }

    getOneMatch = id => {
        return this.app.get(`/match_${id}`)
    }

    editMatch = (id, matchInfo) => {
        return this.app.put(`/match_${id}/edit`, matchInfo)
    }

    deleteMatch = id => {
        return this.app.delete(`/match_${id}/delete`)
    }

    joinMatch = match => {
        return this.app.post(`/${id}/join`, match)
    }

    unjoinMatch = match => {
        return this.app.post(`/${id}/unjoin`, match)
    }
}

const matchesService = new MatchesService()

export default matchesService