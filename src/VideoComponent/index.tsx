import React from "react";
import styles from "./VideoComponent.module.css";
import Banner from "../Banner/index";
import { AiOutlineHeart } from "react-icons/ai";
type Props = { title?: string; desc?: string };

export default function index({ title, desc }: Props) {
  return (
    <>
      <div className={styles.width1000}>
        <div className={styles.task5_1}>
          <Banner name='React.js' subBannerName='The Documentary'></Banner>
          <div className={styles.honeyPot}>Honeypot</div>
        </div>
        <div className={styles.task5_2}>
          <p className={styles.textBold}>{title}</p>
          <p className={styles.textGrey}>{desc}</p>
        </div>
        <div className={styles.middle_center}>
          <AiOutlineHeart size={70}></AiOutlineHeart>
        </div>
      </div>
    </>
  );
}
