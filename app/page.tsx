import Link from 'next/link';
import styles from './home.module.css'; // Make sure the styles are properly imported

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Welcome to Erezs app</h1>

      <p className={styles.subtitle}>Navigate the awesome pages below</p>

      {/* Three buttons linking to different pages */}
      <div className={styles.buttonContainer}>
        <Link href="/tic-tac-toe">
          <button className={styles.button}>Tic-Tac-Toe</button>
        </Link>

        <Link href="/nasa">
          <button className={styles.button}>Nasa API</button>
        </Link>

        <Link href="/design">
          <button className={styles.button}>sockTime</button>
        </Link>
      </div>

      <footer className={styles.footer}>
        <p>Devolped by Erez cohen</p>
        <p>sockTime designed by Bar cohen</p>

      </footer>
    </main>
  );
}
