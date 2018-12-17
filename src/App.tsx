import React from "react";
import styles from "./App.module.css";
import { About } from "./About";

export class App extends React.Component {
  render() {
    return (
      <About>
        <div className={styles.inputSelection}>
          <input type="file" />
        </div>
      </About>
    );
  }
}
