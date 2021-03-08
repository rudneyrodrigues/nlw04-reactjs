import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = false;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt=""/>

            <strong>Novo Desafio</strong>
            <p>Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}