import React, {FC} from 'react';
import styles from './Button.module.css';

type PropsType = {
    disabled?: boolean
    onClick: () => void
}

export const Button: FC<PropsType> = React.memo((props) => {
    const {disabled, onClick, children} = props;

    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>{children}</button>
    )
})