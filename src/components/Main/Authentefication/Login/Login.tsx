import React from 'react';
import {NavLink} from 'react-router-dom';
import {LoginForm} from "./loginFrom/loginForm";




type PropsType = {
    styles: any
}

export const Login: React.FC<PropsType> = ({styles, ...props}) => {

    return (
        <>
            <h1>Cards</h1>
            <h2>Sign In</h2>
            <LoginForm
                styles={styles}/>

            <div className={styles.footerBox}>
                <p>Don't have an account?</p>
                <NavLink to={'registration'} className={styles.footerLink}>
                    <span>Sign Up</span>
                </NavLink>

            </div>
        </>
    )

}

export default Login;
