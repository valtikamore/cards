import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        className, spanClassName,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const [error, setError] = useState(false);
    const [text, setText] = useState('');

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        if (text) {
            setError(false)
        }
        setText(e.currentTarget.value)

    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        e.key === 'Enter' // и если нажата кнопка Enter
        && alert(text)
    }
    const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
        if(text === '') {
            setError(true)
        }
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${s.input} ${error ? s.errorInput : ''}`

    return (
        <>
            <div className={s.inputWrapper}>
                <input
                    type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    value={text}
                    onBlur={onBlur}
                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
                {error && <div className={finalSpanClassName}>This field is compulsory</div>}
            </div>

        </>
    )
}

export default SuperInputText