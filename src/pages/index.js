import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.sideBar}></div>
        <div className={styles.cardForm}>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <label>Card Holder Name</label>
              <input type="text" placeholder="eg :John Carter"></input>
              <label>Card Number</label>
              <input type="text" placeholder="eg :1234 5678 1234"></input>
              <div className={styles.bottomInfo}>
                <label>EXP.DATE (MM/YY)</label>
                <input type="text" placeholder="MM"></input>
                <input type="text" placeholder="YY"></input>
                <label>CVC</label>
                <input type="text" placeholder="eg : 123"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.cardFront}></div>
        <div className={styles.cardBack}></div>
      </div>
    </main>
  );
}
