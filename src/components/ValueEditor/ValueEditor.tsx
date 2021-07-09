import React, {ChangeEvent, FC} from 'react';
import {Button} from '../Button/Button';
import styles from './ValueEditor.module.css'

type PropsType = {
    startValue: number
    endCounter: number
    editMode: boolean
    error: boolean
    setEditMode: (value: boolean) => void
    setStartValue: (value: number) => void
    setStartCounter: (value: number) => void
    setEndCounter: (value: number) => void
    setError: (value: boolean) => void
}

export const ValueEditor: FC<PropsType> = (props) => {
    const {
        error,
        editMode,
        startValue,
        endCounter,
        setEditMode,
        setStartValue,
        setStartCounter,
        setEndCounter,
        setError
    } = props;

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = +event.currentTarget.value;
        if (value >= endCounter || value < 0) return setError(true);
        error && setError(false);
        setEditMode(true);
        setStartValue(value);
    };
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = +event.currentTarget.value;
        if (value <= startValue) return setError(true);
        error && setError(false);
        setEditMode(true);
        setEndCounter(value);
    };
    const onClickHandler = () => {
        setStartCounter(startValue)
        setEditMode(false)
    }


    return (<div>
        <div className={styles.inputContainer}>
            <div>Start value:
                <input type="number"
                       className={`${styles.input} ${error ? styles.errorInput : ''}`}
                       value={startValue}
                       onChange={onChangeStartValue}/>
            </div>
            <div>Max value: <input type="number"
                                   className={`${styles.input} ${error ? styles.errorInput : ''}`}
                                   value={endCounter}
                                   onChange={onChangeMaxValue}/>
            </div>
        </div>
        <div className={styles.buttonContainer}>
            <Button onClick={onClickHandler} disabled={!editMode || error}>set</Button>
        </div>
    </div>)
}