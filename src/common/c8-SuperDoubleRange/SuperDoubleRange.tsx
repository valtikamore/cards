import { Slider } from "@material-ui/core";
import React, {useState} from "react";


const SuperDoubleRange: React.FC = (

) => {
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(100);
    function valuetext(value: number) {
        return `${value}`;
    }
    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue2(value[0])
            setValue3(value[1])
        }
    }
    const handleChange  = (event: React.ChangeEvent<{}>, value: (number | number[])) => {
        onChangeRange && onChangeRange(value as number)
    };

    return (
        <>
            <span>{value2}</span>
            <Slider
                style={{
                    color:"grey",
                    width:150
                }}
                value={[value2,value3]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}>
                DoubleRange
            </Slider>
            <span>{value3}</span>
        </>

    );
}

export default SuperDoubleRange;
