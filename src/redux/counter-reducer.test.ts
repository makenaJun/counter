import {
    counterReducer,
    CounterStateType, incrementCounter, resetCounter,
    setCurrentValue,
    setError,
    setMaxValue,
    setStartValue
} from './counter-reducer';

let startState: CounterStateType;

beforeEach(() => {
    startState = {
        currentValue: 0,
        maxValue: 5,
        startValue: 0,
        error: false,
    }
})

describe('Counter reducer', () => {
    it('current value should be change', () => {
            const action = setCurrentValue(2);

            const newState = counterReducer(startState, action);

            expect(startState).not.toBe(newState);
            expect(newState.currentValue).toBe(2);
});

    it('start value should be change', () => {
        const action = setStartValue(3);

        const newState = counterReducer(startState, action);

        expect(startState).not.toBe(newState);
        expect(newState.startValue).toBe(3);
    });

    it('max value should be change', () => {
        const action = setMaxValue(10);

        const newState = counterReducer(startState, action);

        expect(startState).not.toBe(newState);
        expect(newState.maxValue).toBe(10);
    });

    it('error should be change to true', () => {
        const action = setError(true);

        const newState = counterReducer(startState, action);

        expect(startState).not.toBe(newState);
        expect(newState.error).toBeTruthy();
    });

    it('error should be change to false', () => {
        startState.error = true;

        const action = setError(false);

        const newState = counterReducer(startState, action);

        expect(startState).not.toBe(newState);
        expect(newState.error).toBeFalsy();
    });

    it('current value should be incremented', () => {
        const action = incrementCounter();

        const newState = counterReducer(startState, action);

        expect(startState).not.toBe(newState);
        expect(newState.currentValue).toBe(1);
    });

    it('current value should be reset', () => {
        startState.currentValue = 3;
        const action = resetCounter();

        const newState = counterReducer(startState, action);

        expect(startState).not.toBe(newState);
        expect(newState.currentValue).toBe(0);
    });
});