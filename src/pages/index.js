import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Space_Grotesk } from "@next/font/google";

const spg = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.sideBar}></div>
        <div className={styles.cardForm}>
          <div className={styles.formWrapper}>
            <form className={`${styles.form} ${spg.className}`}>
              <label>CARDHOLDER NAME</label>
              <input
                type="text"
                placeholder="eg :Rahul Roy"
                className={styles.upperInput}
              ></input>
              <label>CARD NUMBER</label>
              <input
                type="text"
                placeholder="eg :1234 5678 1234"
                className={styles.upperInput}
              ></input>
              <div className={styles.bottomInfo}>
                <div className={styles.expiryDateContainer}>
                  <label className={styles.exp}>EXP.DATE (MM/YY)</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      placeholder="MM"
                      className={styles.lowerInput}
                    ></input>
                    <input
                      type="text"
                      placeholder="YY"
                      className={styles.lowerInput}
                    ></input>
                  </div>
                </div>
                <div className={styles.cvcContainer}>
                  <label>CVC</label>
                  <input
                    type="text"
                    placeholder="eg : 123"
                    className={styles.lowerInput}
                  ></input>
                </div>
              </div>
              <button className={styles.button}>Confirm</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.cardFront}>
          <div className={styles.bigCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.cardNumber}>0000 0000 0000 0000</div>
          <div className={styles.cardOwner}>RAHUL ROY</div>
          <div className={styles.cardExpiry}>00/00</div>
        </div>
        <div className={styles.cardBack}></div>
      </div>
    </main>
  );
}
