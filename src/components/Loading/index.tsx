import styles from './loading.module.css';

export const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Carregando...</p>
        </div>
    );
}