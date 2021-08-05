export enum ACTIONS_TYPES {
    SET_CURRENT_VALUE = 'Counter/Counter/SET_CURRENT_VALUE',
    SET_START_VALUE = 'Counter/Counter/SET_START_VALUE',
    SET_MAX_VALUE = 'Counter/Counter/SET_MAX_VALUE',
    SET_ERROR = 'Counter/Counter/SET_ERROR',
    INCREMENT_COUNTER = 'Counter/Counter/INCREMENT_COUNTER',
    RESET_COUNTER = 'Counter/Counter/RESET_COUNTER',
}

export type ActionType = ReturnType<typeof setCurrentValue>
    | ReturnType<typeof incrementCounter>
    | ReturnType<typeof resetCounter>
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setError>

export type CounterStateType = typeof initialState;

const initialState = {
    currentValue: 0,
    maxValue: 5,
    startValue: 0,
    error: false,
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.SET_START_VALUE:
        case ACTIONS_TYPES.SET_MAX_VALUE:
        case ACTIONS_TYPES.SET_ERROR:
        case ACTIONS_TYPES.SET_CURRENT_VALUE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ACTIONS_TYPES.INCREMENT_COUNTER: {
            return {
                ...state,
                currentValue: state.currentValue + 1,
            }
        }
        case ACTIONS_TYPES.RESET_COUNTER: {
            return {
                ...state,
                currentValue: state.startValue,
            }
        }
        default:
            return state;
    }
};


export const setCurrentValue = (currentValue: number) => ({
    type: ACTIONS_TYPES.SET_CURRENT_VALUE,
    payload: {
        currentValue,
    },
});
export const setStartValue = (startValue: number) => ({
    type: ACTIONS_TYPES.SET_START_VALUE,
    payload: {
        startValue,
    },
});

export const setMaxValue = (maxValue: number) => ({
    type: ACTIONS_TYPES.SET_MAX_VALUE,
    payload: {
        maxValue,
    },
});

export const setError = (error: boolean) => ({
    type: ACTIONS_TYPES.SET_ERROR,
    payload: {
        error,
    },
});

export const incrementCounter = () => ({
    type: ACTIONS_TYPES.INCREMENT_COUNTER,
    payload: {},
});

export const resetCounter = () => ({
    type: ACTIONS_TYPES.RESET_COUNTER,
    payload: {},
});