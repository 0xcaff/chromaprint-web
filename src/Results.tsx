import React from "react";
import styles from "./Results.module.css";
import { Result } from "./acoustid";

interface ResultsProps {
  results: Result[];
}

export const Results = (props: ResultsProps) => (
  <div className={styles.container}>
    <div className={styles.header}>Results</div>

    {props.results.map(result => (
      <div className={styles.resultContainer} key={result.id}>
        <div className={styles.id}>
          <a href={`https://acoustid.org/track/${result.id}`}>{result.id}</a>
        </div>
        <div className={styles.score}>
          Score {Math.round(result.score * 100)}%
        </div>
      </div>
    ))}
  </div>
);
