import axios from 'axios';
import {baseURL} from "./auth-api";


const cardsRequest = axios.create({
    baseURL,
    withCredentials: true
})

export const cardsAPI = {
    getCards(cardsPack_id:string) {
        return cardsRequest.get<cardsResponseType>('/cards/card')
            .then(res => res.data)
    },
    createCard(cardsPack_id: string) {
        return cardsRequest.post(`/cards/card`,{cardsPack_id})
            .then(res => res.data)
    },
    deleteCard() {
        return cardsRequest.delete(`/cards/card`)
            .then(res =>res.data)
    },
    updateCard(_id:string,name:string) {
        return cardsRequest.put(`/cards/card `,{_id,name})
            .then(res => res.data)
    }
}



export type  cardsResponseType =  {
    cards: [
        {
            answer: string
            question: string
            cardsPack_id: string
            grade: 4.987525071790364
            rating: number
            shots: number
            type: string
            user_id: string
            created: string
            updated: string
            __v: number
            _id: string
        },
    ]
    cardsTotalCount: number
    maxGrade:number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

