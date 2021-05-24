import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {LoginPage} from "./pages/login/login";
import {ProfilePage} from "./pages/profile/profile";
import {PageNotFounded} from "./pages/404page/404";
import {NewPassword} from "./pages/enterNewPasssword/enterNewPasssword";
import {RegistrationPage} from "./pages/register/register";
import {RestorePasswordPage} from "./pages/restorePassword/restorePassword";


export const PATH = {
  LOGIN: '/login',
  PROFILE: '/profile',
  NEW_PASSWORD:'/new-pass',
  REGISTER:'/registration',
  RESTORE_PASS:'/restore-pass'
}

const App = () =>  {
  return (
    <div >
      <Switch>
        <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
        <Route path={PATH.PROFILE} render={() => <ProfilePage/>}/>
        <Route path={PATH.PROFILE} render={() => <NewPassword/>}/>
        <Route path={PATH.REGISTER} render={() => <RegistrationPage/>}/>
        <Route path={PATH.RESTORE_PASS} render={() => <RestorePasswordPage/>}/>
        <Route render={() => <PageNotFounded/>}/>
      </Switch>
    </div>
  );
}

export default App;
