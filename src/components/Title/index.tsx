import styles from './title.module.css';
import githubIcon from '../../assets/icons/github.png';

export const Title = () => {
    return (
        <section className={styles.title}>
            <img src={githubIcon} alt="GitHub" />
            <h1>Perfil <span>GitHub</span></h1>
        </section>
    );
}