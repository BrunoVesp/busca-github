import styles from './app.module.css';
import { ProfileCard } from './components/ProfileCard';
import { Title } from "./components/Title"
import { FormEvent, useState } from 'react';
import { IUser } from './types/IUser';
import { Error } from './components/Error';
import { Loading } from './components/Loading';
import { SearchForm } from './components/SearchForm';

function App() {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<IUser>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getUserData() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        console.log("Algo deu errado");
        setError(true);
        setUserData(undefined);
        return;
      }
      setError(false);

      const data = await response.json();

      setUserData({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio
      })

    } catch (err) {
      console.log("Erro", err);
      setError(true);
      setUserData(undefined);

    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    getUserData();
  }

  return (
    <div className={styles.background}>
      <div className={styles.dashedDiv}></div>
      <section className={styles.container}>
        <Title />
        <SearchForm
          onSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
        />
        {loading ? <Loading /> :
          error ? <Error /> :
            userData ?
              <ProfileCard
                name={userData.name}
                avatar_url={userData.avatar_url}
                bio={userData.bio}
              />
              : null}
      </section>
    </div>
  )
}

export default App
