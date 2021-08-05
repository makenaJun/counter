import React, {FC} from 'react';

type PropsType = {
    currentValue: number,
    limitReached: boolean,
    editMode: boolean,
    error: boolean,
};

export const CounterDisplay: FC<PropsType> = (props) => {
    const {currentValue, limitReached, editMode, error} = props;

    const CounterStyle = {
        color: limitReached || error ? 'red' : '#282c34',
        fontWeight: 700,
        fontSize: limitReached ? '3.5rem' : '3rem',
    }
    const displayedContent = error ? 'Invalid value' : editMode ? 'Set value' : currentValue;

    return (
        <div style={CounterStyle}>{displayedContent}</div>
    )
};