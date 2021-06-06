import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./components/Main/Profile/Profile";
import {PageNotFounded} from "./components/Main/PageNotFounded/PageNotFounded";
import Auth from './components/Main/Authentefication/Auth/Auth';
import {useDispatch, useSelector} from "react-redux";
import {authMeTC} from "./redux/authReducer/authReducer";
import {AppStateType} from "./redux/store";
import {serverUserType} from "./api/cards-api";
import preloader from './assets/icons/preloader.svg'
import { Packs } from './components/Main/Packs/Packs';
import {Cards} from "./components/Main/1_Cards/Cards";


const PATH = {
    AUTH: '/auth',
    LOGIN: 'auth/login',
    PROFILE: '/profile',
    PACKS: '/packs',
    CARDS: '/cards',
}


const App = (props: any) => {
    const dispatch: Function = useDispatch()
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.authReducer.isLoggedIn);
    const loading = useSelector<AppStateType, boolean>(state => state.authReducer.loading);
    const user = useSelector<AppStateType, serverUserType | null>(state => state.authReducer.user);

    useEffect(() => {
        if (user === null) {
            dispatch(authMeTC())
        }
    }, [])


    if (loading) {
        return (<div><img src={preloader} alt=""/></div>)
    }


    return (
        <div>
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.AUTH} render={() => <Auth/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PACKS} render={() => <Packs/>}/>
                <Route path={PATH.CARDS} render={() => <Cards/>}/>
                <Route render={() => <PageNotFounded/>}/>
            </Switch>
        </div>
    );
}

export default App;
