import React, {useCallback, useState} from 'react';
import './App.css';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import {VariantOne} from './VariantOne';
import {VariantTwo} from './VariantTwo';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/store';
import {incrementCounter, resetCounter,} from './redux/counter-reducer';

export type CounterVariantType = 'ONE' | 'TWO';

function App() {
    const currentValue = useSelector<AppStateType, number>(state => state.counter.currentValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const error = useSelector<AppStateType, boolean>(state => state.counter.error);

    const limitReached = currentValue === maxValue;

    const [editMode, setEditMode] = useState<boolean>(false);

    const dispatch = useDispatch();
    

    const onIncrementHandler = useCallback(() => {
        dispatch(incrementCounter());
    }, [dispatch]);
    const onResetHandler = useCallback(() => {
        dispatch(resetCounter());
    }, [dispatch]);


    return (
        <HashRouter>
            <div className="App">
                <div className={'menuNav'}>
                    <NavLink exact to={'/'} className={`menuNav__link`}>Variant One</NavLink>
                    <NavLink to={'/varianttwo'} className={`menuNav__link`}>Variant Two</NavLink>
                </div>
                <div className="App-header">
                    <Route exact path={'/'} render={() => <VariantOne
                        editMode={editMode}
                        error={error}
                        maxValue={maxValue}
                        setEditMode={setEditMode}
                        startValue={startValue}
                        onIncrementHandler={onIncrementHandler}
                        onResetHandler={onResetHandler}
                        limitReached={limitReached}
                        currentValue={currentValue}
                    />}/>

                    <Route path={'/varianttwo'} render={() => <VariantTwo
                        editMode={editMode}
                        error={error}
                        setEditMode={setEditMode}
                        startValue={startValue}
                        onIncrementHandler={onIncrementHandler}
                        onResetHandler={onResetHandler}
                        limitReached={limitReached}
                        currentValue={currentValue}
                        maxValue={maxValue}
                    />}/>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
