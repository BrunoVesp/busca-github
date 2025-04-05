import styles from './searchForm.module.css';
import { IoIosSearch } from "react-icons/io";
import { Button } from "../Button";
import { Input } from "../Input";
import { Dispatch, FormHTMLAttributes } from 'react';

interface SearchFormProps extends FormHTMLAttributes<HTMLFormElement>{
    username: string;
    setUsername: Dispatch<React.SetStateAction<string>>;
}

export const SearchForm = ({ username, setUsername, ...rest}: SearchFormProps) => {
    return (
        <form className={styles.form} {...rest}>
            <Input
                type="text"
                placeholder='Digite um usuário do Github'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button type='submit'><IoIosSearch size={40} /></Button>
        </form>
    );
}