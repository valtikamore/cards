import React from 'react'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperDoubleRange from "../../common/c8-SuperDoubleRange/SuperDoubleRange";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";

import classes from './test.module.css'

export const TestStand = () => {



    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>


                <SuperInputText />

                <SuperDoubleRange/>
                <SuperButton red>
                    hi
                </SuperButton>
                <SuperButton >
                    Ignat ^^)
                </SuperButton>
                <SuperCheckbox>
                    Change
                </SuperCheckbox>
            </div>
        </div>

    )
}