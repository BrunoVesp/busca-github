import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

export const Input = ( props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input 
            {...props}
            className={styles.input}
        />
    );
}