import React from "react";
import { ChromaprintContext } from "chromaprint-wasm/chromaprint_wasm_bg.wasm";

const instance = new ChromaprintContext();
instance.feed(new Int16Array([1, 2, 3, 4, 5]));
console.log(instance.finish());

export class App extends React.Component {
  render() {
    return <div>Hello World!!</div>;
  }
}
