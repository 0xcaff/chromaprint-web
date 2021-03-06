import React from "react";
import styles from "./About.module.css";

interface Props {
  children: React.ReactNode;
}

export const About = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.heading}>Chromaprint Web</div>

    <div className={styles.body}>
      This is the{" "}
      <a href="https://github.com/0xcaff/rust-chromaprint">rust-chromaprint</a>{" "}
      library running on the web using WebAssembly. The library extracts a
      fingerprint from the provided audio file. The fingerprint is then sent to{" "}
      <a href="https://acoustid.org">AcoustID</a> to identify the song.
    </div>

    <div className={styles.fork}>
      <a href="https://github.com/0xcaff/chromaprint-web">Fork me on GitHub!</a>
    </div>

    {props.children}
  </div>
);
