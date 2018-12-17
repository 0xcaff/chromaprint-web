import { ChromaprintContext } from "chromaprint-wasm";

const context = new ChromaprintContext();
context.feed([1,2,3]);
console.log(context.finish());