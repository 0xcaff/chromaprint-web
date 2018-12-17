import React from "react";
import { ChromaprintContext } from "chromaprint-wasm";
import styles from "./style.module.css";

const context = new ChromaprintContext();
context.feed(new Int16Array([1, 2, 3]));
console.log(context.finish());

export class App extends React.Component {
  render() {
    return <div className={styles.container}>Hello World!!</div>;
  }
}
