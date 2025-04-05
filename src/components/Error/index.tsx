import styles from './error.module.css';

export const Error = () => {
    return (
        <div className={styles.error}>
            <h2>Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente</h2>
        </div>
    );
}