import Link from 'next/link';
import styles from './home.module.css'; // Make sure the styles are properly imported

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Welcome to Erez's app</h1>

      <p className={styles.subtitle}>Navigate the pages below</p>

      {/* Three buttons linking to different pages */}
      <div className={styles.buttonContainer}>
        <Link className={styles.buttons} href="/tic-tac-toe">
          <button className={styles.button}>Tic-Tac-Toe</button>
        </Link>

        <Link className={styles.buttons} href="/nasa">
          <button className={styles.button}>NASA API</button>
        </Link>

        <Link className={styles.buttons} href="/design" >
          <button className={styles.button}>SocksTime</button>
        </Link>
      </div>

      <footer className={styles.footer}>
        <p>Devolped by Erez Cohen</p>
        <p>SocksTime designed by Bar Cohen</p>

      </footer>
    </main>
  );
}
