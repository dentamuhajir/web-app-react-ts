import axios from "axios"
import { Article } from "../../Models/Article"

const articleService = {
    
    fetchListArticle: async (): Promise<Article[]> => {
        const endpoint: string  = import.meta.env.VITE_API_BASE_URL + '/users'
        const response = await axios.get<Article[]>(endpoint)
        return response.data
    },
}

export default articleService