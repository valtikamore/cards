import axios from "axios";
import {baseURL} from "./auth-api";

const cardsRequest = axios.create({
    baseURL,
    withCredentials: true
})

export const packsAPI = {
    getPacks(params?: PacksParamsType) {
        return cardsRequest.get<packsResponse>('/cards/Pack', {params})
            .then(res => res.data)
    },
    createPack() {
        return cardsRequest.post<packsResponse>(`/cards/pack`, {
            cardsPack: {
                name: "new Pack 2.0",
            }
        })
            .then(res => res.data)
    },
    deletePack(id: string) {
        return cardsRequest.delete(`/cards/pack?id=${id}`)
            .then(res => res.data)
    },
    updatePack(id: string, name: string) {
        return cardsRequest.put(`/cards/pack`, {
            cardsPack: {
                _id: id,
                name,
            }
        })
            .then(res => res.data)
    }
}
export type packType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
    user_name: string
}

export type packsResponse = {
    cardPacks:packType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type PacksParamsType = {
    packName?: 'english'
    min?: number
    max?: number
    page?: number
    pageCount?: number
    user_id?: string
    sortPacks?: string
}
