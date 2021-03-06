import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./components/Main/Profile/Profile";
import {PageNotFounded} from "./components/Main/PageNotFounded/PageNotFounded";
import Auth from './components/Main/Authentefication/Auth/Auth';
import {useDispatch, useSelector} from "react-redux";
import {authMeTC} from "./redux/authReducer/authReducer";
import {AppStateType} from "./redux/store";
import preloader from './assets/icons/preloader.svg'
import { Packs } from './components/Main/Packs/Packs';
import {Cards} from "./components/Main/1_Cards/Cards";
import {ProfileResponseType} from "./api/auth-api";


const PATH = {
    AUTH: '/auth',
    LOGIN: 'auth/login',
    PROFILE: '/profile',
    PACKS: '/packs',
    CARDS: '/cards/:id/:name',
}


const App = (props: any) => {
    const dispatch: Function = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>(state => state.appReducer.isInitialized);
    const profile = useSelector<AppStateType, ProfileResponseType | null>(state => state.profileReducer.profile);
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.authReducer.isLoggedIn);


    useEffect(() => {
        if (profile === null) {
            dispatch(authMeTC())
        }
    }, [])


    if (isInitialized) {
        return (<div className={'initializePreloader'}>
            <img src={preloader} alt={'initialize preloader'}/>
        </div>)
    }

    return (
        <div>
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() => {
                    if (profile !== null && isLoggedIn) {
                        return (<Redirect to={PATH.PROFILE}/>);
                    }
                    return (<Redirect to={PATH.LOGIN}/>)
                }}/>
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
