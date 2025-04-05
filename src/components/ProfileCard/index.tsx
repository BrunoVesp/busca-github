import { IUser } from '../../types/IUser';
import styles from './profileCard.module.css';

export const ProfileCard = ({ avatar_url, name, bio }: IUser) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={avatar_url} alt={`Foto de ${name}`} />
            </div>
            <div className={styles.textContainer}>
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        </div>
    );
}