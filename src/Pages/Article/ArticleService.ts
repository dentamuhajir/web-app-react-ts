import axios from "axios"
import { Article } from "../../Models/Article"

const baseUrl:string = "https://jsonplaceholder.typicode.com" 

const articleService = {
    
    fetchListArticle: async (): Promise<Article[]> => {
        const endpoint: string  = baseUrl + '/users'
        const response = await axios.get<Article[]>(endpoint)
        return response.data
    },
}

export default articleService