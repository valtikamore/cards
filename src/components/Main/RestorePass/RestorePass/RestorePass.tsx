import React from 'react';
import { useSelector} from "react-redux";
import {RestorePassForm} from "./restorePassForm/RestorePassForm";
import {CheckEmail} from "./checkEmail/CheckEmail";
import {AppStateType} from "../../../../redux/store";

type PropsType = {
    styles: any
}

const RestorePass: React.FC<PropsType> = ({styles, ...props}) => {
    const email = useSelector<AppStateType,boolean>(state => state.restorePassReducer.email)

    return (
        <>
            {email ? <CheckEmail styles={styles}/>
                :
                <>
                    <RestorePassForm styles={styles}/>
                </>
            }</>
    )
}

export default RestorePass;
