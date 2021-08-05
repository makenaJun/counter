import React, {ChangeEvent, FC, useCallback} from 'react';
import {Button} from '../Button/Button';
import styles from './ValueEditor.module.css'
import {useDispatch} from 'react-redux';
import {setCurrentValue, setError, setMaxValue, setStartValue} from '../../redux/counter-reducer';

type PropsType = {
    startValue: number,
    maxValue: number,
    editMode: boolean,
    error: boolean,
    setEditMode: (value: boolean) => void,
};

export const ValueEditor: FC<PropsType> = (props) => {
    const {
        error,
        editMode,
        startValue,
        maxValue,
        setEditMode,
    } = props;

    const dispatch = useDispatch();

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = +event.currentTarget.value;
        if (value >= maxValue || value < 0) return dispatch(setError(true));
        error && dispatch(setError(false));
        setEditMode(true);
        dispatch(setStartValue(value));
    };
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = +event.currentTarget.value;
        if (value <= startValue) return dispatch(setError(true));
        error && dispatch(setError(false));
        setEditMode(true);
        dispatch(setMaxValue(value));
    };
    const onClickHandler = useCallback(() => {
        dispatch(setCurrentValue(startValue));
        setEditMode(false);
    }, [dispatch, startValue, setEditMode]);


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
                                   value={maxValue}
                                   onChange={onChangeMaxValue}/>
            </div>
        </div>
        <div className={styles.buttonContainer}>
            <Button onClick={onClickHandler} disabled={!editMode || error}>set</Button>
        </div>
    </div>)
};