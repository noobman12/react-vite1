import React from "react";
import styles from "./Banner.module.css";
type Props = { name?: string; subBannerName?: string };

export default function index({ name, subBannerName }: Props) {
  return (
    <>
      <div className={styles.banner}>
        <span className={styles.span}>{name}</span>
        <div className={styles.sub_banner}>{subBannerName}</div>
      </div>
    </>
  );
}
