import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import {VariantOne} from './VariantOne';
import {VariantTwo} from './VariantTwo';

export type CounterVariantType = 'ONE' | 'TWO';

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
        <HashRouter>
            <div className="App">
                <div className={'menuNav'}>
                    <NavLink exact to={'/'} className={`menuNav__link`}>Variant One</NavLink>
                    <NavLink to={'/varianttwo'} className={`menuNav__link`}>Variant Two</NavLink>
                </div>
                <div className="App-header">
                    <Route exact path={'/'} render={() => <VariantOne
                        setStartValue={setStartValue}
                        editMode={editMode}
                        error={error}
                        endCounter={endCounter}
                        setStartCounter={setStartCounter}
                        setEditMode={setEditMode}
                        setEndCounter={setEndCounter}
                        setError={setError}
                        startValue={startValue}
                        onIncrementHandler={onIncrementHandler}
                        onResetHandler={onResetHandler}
                        limitReached={limitReached}
                        startCounter={startCounter}
                    />}/>

                    <Route path={'/varianttwo'} render={() => <VariantTwo
                        setStartValue={setStartValue}
                        editMode={editMode}
                        error={error}
                        endCounter={endCounter}
                        setStartCounter={setStartCounter}
                        setEditMode={setEditMode}
                        setEndCounter={setEndCounter}
                        setError={setError}
                        startValue={startValue}
                        onIncrementHandler={onIncrementHandler}
                        onResetHandler={onResetHandler}
                        limitReached={limitReached}
                        startCounter={startCounter}
                    />}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
