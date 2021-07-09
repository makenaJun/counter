import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {CounterDisplay} from './components/CounterDisplay/CounterDisplay';
import {ValueEditor} from './components/ValueEditor/ValueEditor';
import {Counter} from './components/Counter/Counter';

function App() {
    const [startCounter, setStartCounter] = useState<number>(0);
    const [endCounter, setEndCounter] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(startCounter);

    const [editMode, setEditMode] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const limitReached = startCounter === endCounter;

    useEffect(() => {
        const startValueLocal = localStorage.getItem('startValue');
        const endCounterLocal = localStorage.getItem('endCounter');
        if (startValueLocal && endCounterLocal) {
            setStartCounter(Number(startValueLocal));
            setStartValue(Number(startValueLocal));
            setEndCounter(Number(endCounterLocal));
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', startValue.toString());
        localStorage.setItem('endCounter', endCounter.toString());
    }, [endCounter, startValue])

    const onIncrementHandler = useCallback(() => {
        setStartCounter((prev) => prev + 1)
    }, []);
    const onResetHandler = useCallback(() => {
        setStartCounter(startValue);
    }, [startValue]);


    return (
        <div className="App">
            <div className="App-header">
                <div className="wrapper-block">
                    <ValueEditor startValue={startValue}
                                 error={error}
                                 setStartValue={setStartValue}
                                 editMode={editMode}
                                 endCounter={endCounter}
                                 setStartCounter={setStartCounter}
                                 setEditMode={setEditMode}
                                 setEndCounter={setEndCounter}
                                 setError={setError}
                    />
                </div>

                <div className="wrapper-block">
                    <Counter startCounter={startCounter}
                             editMode={editMode}
                             error={error}
                             limitReached={limitReached}
                             startValue={startValue}
                             onIncrementHandler={onIncrementHandler}
                             onResetHandler={onResetHandler}
                    />
                </div>

            </div>
        </div>
    );
}

export default App;
