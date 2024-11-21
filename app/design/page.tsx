"use client"

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

export default function SockTime() {
  const router = useRouter();

  const handleSignInClick = () => {
    // Correct the path to match the URL structure, not the file path
    router.push("/design/sign-in");
  };

  return (
    <main className={styles.hey}>
      <div className={styles.upper}>
        <h4>Socks Time</h4>
      </div>
      <div className={styles.lower}>
        <h3>Welcome</h3>
        <h4>Get started with your account</h4>
        <button className={styles.upperButton}>Sign Up</button>
        <button onClick={handleSignInClick}>Sign In</button>
      </div>
    </main>
  );
}
