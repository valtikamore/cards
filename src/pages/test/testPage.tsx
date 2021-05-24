import React from 'react'
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperDoubleRange from "../../common/c8-SuperDoubleRange/SuperDoubleRange";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperRange from "../../common/c7-SuperRange/SuperRange";
import classes from './test.module.css'

export const TestStand = () => {
    return (
        <div className={classes.wrapper}>
            <div>
                <SuperRadio/>
                <SuperSelect/>
                <SuperButton/>
                <SuperCheckbox/>
                <SuperDoubleRange/>
                <SuperEditableSpan/>
                <SuperInputText/>
                <SuperRange/>
            </div>

        </div>
    )
}