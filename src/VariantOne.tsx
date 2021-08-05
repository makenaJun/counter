import React, {FC} from 'react';
import {ValueEditor} from './components/ValueEditor/ValueEditor';
import {Counter} from './components/Counter/Counter';
import './App.css';

type PropsType = {
    startValue: number,
    currentValue: number,
    error: boolean,
    editMode: boolean,
    maxValue: number,
    limitReached: boolean,
    setEditMode: (value: boolean) => void,
    onIncrementHandler: () => void,
    onResetHandler: () => void,
};

export const VariantOne: FC<PropsType> = (props) => {
    const {
        startValue,
        currentValue,
        editMode,
        error,
        limitReached,
        onResetHandler,
        onIncrementHandler,
        setEditMode,
        maxValue,
    } = props;

    const VARIANT = 'ONE';

    return (<div className="wrapper-counter">
        <div className="wrapper-block">
            <ValueEditor startValue={startValue}
                         error={error}
                         editMode={editMode}
                         setEditMode={setEditMode}
                         maxValue={maxValue}
            />
        </div>

        <div className="wrapper-block">
            <Counter currentValue={currentValue}
                     editMode={editMode}
                     error={error}
                     limitReached={limitReached}
                     startValue={startValue}
                     onIncrementHandler={onIncrementHandler}
                     onResetHandler={onResetHandler}
                     variant={VARIANT}
                     setEditMode={setEditMode}
            />
        </div>
    </div>)
};