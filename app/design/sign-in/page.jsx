"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from 'react';


export default function SockTime() {
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track if sign in is clicked

  const handleSignInClick = (event) => {
    event.preventDefault();
    setIsSignedIn(true); // Set state to true when sign in is clicked
  };


  return (
    <main className={styles.hey}>
    <header className={styles.signInHeder}>
      <p><Link href="/design">Cancel</Link></p>
      <h5>Sign In</h5>
      <h5 className={styles.phantom}>*******</h5>
    </header>
      <div className={styles.upper}>

        <h5 className={styles.enterEmail}>ENTER YOUR EMAIL ADDRESS</h5>

          <input type="email" id="email"name="email"
              placeholder="socks@example.com" 
              className={styles.input}/>
        
          <input
            type="password"  id="password"  name="password"
            placeholder="Required" 
            className={styles.input}
          />

        <button className={styles.submitButton} onClick={handleSignInClick}>Sign In</button>
        <h5 className={styles.forgotPassword}>forgot password?</h5>
        {isSignedIn && <p className={styles.signedInText}>Sorry your email was incorrect. please double-check your email.</p>}
      </div>  
    </main>
  );
}
