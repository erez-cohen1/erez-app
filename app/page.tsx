import Link from 'next/link';
import styles from './home.module.css'; // Make sure the styles are properly imported

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Welcome to Erez&apos;s App</h1>
      <p className={styles.subtitle}>Explore the features by clicking on the images below</p>

      <div className={styles.imageGrid}>
        <Link href="/tic-tac-toe" className={styles.imageLink}>
          <img
            src="/tic-tac-toe.png"
            alt="Tic-Tac-Toe"
            className={styles.image}
          />
          <p className={styles.imageText}>Tic-Tac-Toe</p>
        </Link>

        <Link href="/nasa" className={styles.imageLink}>
          <img
            src="/NASA.jpg"
            alt="NASA API"
            className={styles.image}
          />
          <p className={styles.imageText}>NASA API</p>
        </Link>

        <Link href="/design" className={styles.imageLink}>
          <img
            src="/sockslogo.jpg"
            alt="SocksTime"
            className={styles.image}
          />
          <p className={styles.imageText}>SocksTime</p>
        </Link>
      </div>

      <footer className={styles.footer}>
        <p>Developed by Erez Cohen</p>
        <p>SocksTime designed by Bar Cohen</p>
      </footer>
    </main>
  );
}