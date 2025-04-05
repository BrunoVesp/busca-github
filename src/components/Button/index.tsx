import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className={styles.button}
        >
            {children}
        </button>
    );
}