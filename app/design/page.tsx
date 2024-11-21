import styles from "./page.module.css";

export default function SockTime() {
  return (
    <>
    <main className = {styles.hey}>
      <div className = {styles.upper}>
        <h4> socks Time </h4>
      </div>
      <div className = {styles.lower}>
        <h3>Welcome</h3>
        <h4>Get started  with your acount</h4>
        <button className = {styles.upperButton}>sign up</button>
        <button >sign in</button>
      </div>
    </main>
    </>
  );
}

