import React, {FC} from 'react';
import {Button} from '../Button/Button';
import styles from './Counter.module.css'
import {CounterDisplay} from '../CounterDisplay/CounterDisplay';
import {CounterVariantType} from '../../App';

type PropsType = {
    currentValue: number,
    editMode: boolean,
    error: boolean,
    limitReached: boolean,
    startValue: number,
    variant: CounterVariantType,
    onIncrementHandler: () => void,
    onResetHandler: () => void,
    setEditMode: (value: boolean) => void,
};

export const Counter: FC<PropsType> = (props) => {
    const {
        variant, currentValue, error, limitReached,
        editMode, startValue, onIncrementHandler, onResetHandler, setEditMode
    } = props;

    return (<div>
        <div className={styles.displayContainer}>
            <CounterDisplay currentValue={currentValue}
                            editMode={editMode}
                            limitReached={limitReached}
                            error={error}/>
        </div>
        <div className={styles.buttonContainer}>
            <Button disabled={limitReached || editMode}
                    onClick={onIncrementHandler}>inc</Button>
            <Button disabled={currentValue === startValue || editMode}
                    onClick={onResetHandler}>reset</Button>
            {variant === 'TWO' && <Button onClick={() => setEditMode(true)}>set</Button>}
        </div>
    </div>)
};