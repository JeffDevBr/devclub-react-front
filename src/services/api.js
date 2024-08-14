import axios from "axios"

const api = axios.create({
    baseURL: 'https://desafio-react-backend-4.onrender.com'
})

export default api
