import axios from "axios"

export const api = axios.create({
    baseURL: "https://lista-de-contatos.onrender.com",
    timeout: 9000
})