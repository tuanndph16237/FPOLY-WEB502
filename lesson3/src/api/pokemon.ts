import Pokemon from "../models/pokemon";
import instance from "./instance";


export const getAll = () => {
    const url = "/pokemons"
    return instance.get(url)
}

export const get = (id: number) => {
    const url = "/pokemons/" + id 
    return instance.get(url)
}

export const create = (data: Pokemon) => {
    const url = "/pokemons"
    return instance.post(url, data)
}