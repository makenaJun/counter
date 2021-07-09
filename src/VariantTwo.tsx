import React, {FC} from 'react';
import {ValueEditor} from './components/ValueEditor/ValueEditor';
import {Counter} from './components/Counter/Counter';
import './App.css';

type PropsType = {
    startValue: number
    startCounter: number
    error: boolean
    editMode: boolean
    endCounter: number
    limitReached: boolean
    onIncrementHandler: () => void
    onResetHandler: () => void
    setStartValue: (value: number) => void
    setStartCounter: (value: number) => void
    setEditMode: (value: boolean) => void
    setError: (value: boolean) => void
    setEndCounter: (value: number) => void
}

export const VariantTwo: FC<PropsType> = (props) => {
    const {
        startValue,
        editMode,
        error,
        startCounter,
        limitReached,
        onResetHandler,
        onIncrementHandler,
        setStartValue,
        setStartCounter,
        setEditMode,
        setError,
        endCounter,
        setEndCounter
    } = props;
    return (<div className="wrapper-counter">
        <div className="wrapper-block">
            {editMode ? <ValueEditor startValue={startValue}
                                     error={error}
                                     setStartValue={setStartValue}
                                     editMode={editMode}
                                     endCounter={endCounter}
                                     setStartCounter={setStartCounter}
                                     setEditMode={setEditMode}
                                     setEndCounter={setEndCounter}
                                     setError={setError}
            /> : <Counter startCounter={startCounter}
                          editMode={editMode}
                          error={error}
                          limitReached={limitReached}
                          startValue={startValue}
                          onIncrementHandler={onIncrementHandler}
                          onResetHandler={onResetHandler}
                          variant={'TWO'}
                          setEditMode={setEditMode}
            />}
        </div>
    </div>)
}