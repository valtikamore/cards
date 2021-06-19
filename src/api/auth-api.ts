import axios from "axios";


export const baseURL = 'http://localhost:7542/2.0'
const cardsRequest = axios.create({
    baseURL,
    withCredentials: true
})

export const authAPI = {
    registration(email: string, password: string) {
        return cardsRequest.post(`/auth/register/`, {email, password})
            .then(res => res.data)
    },
    logIn(email: string, password: string, rememberMe: boolean) {
        return cardsRequest.post<ProfileResponseType>(`/auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    me() {
        return cardsRequest.post<ProfileResponseType>(`/auth/me`, {})
            .then(res => res.data)
    },
    logOut(){
        return cardsRequest.delete<serverResponseType>(`/auth/me`)
            .then(res => res.data)
    },
    updateMe(name: string, avatar?: string) {
        return cardsRequest.put(`/auth/me`, {name, avatar})
            .then(res => res.data)
    },
    updateAvatar(avatar: string) {
        return cardsRequest.put(`/auth/me`, {avatar})
            .then(res => res.data)
    },
    setNewPassword(password: string, resetPasswordToken: string) {
        return cardsRequest.post(`/auth/set-new-password`, {password, resetPasswordToken})
            .then(res => res.data)
    },
    restorePassword(email: string,) {
        const message = `	
	            password recovery link: 
	            <a href='http://localhost:3000/#/auth/change-password/$token$'>
	                link
	            </a>`
        const fromUser = 'test-front-admin <valtika>'
        return cardsRequest.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`, {email, fromUser, message})
            .then(res => res.data)
    }

}
export type ProfileResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
}
export type serverResponseType = {
    info: string
    error: string;
}
