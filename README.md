# chromaprint-web

A demo of [rust-chromaprint] running on the web using WebAssembly.

## FAQ

### Why not just use emscripten to compile the C library and write a wrapper instead of rewriting chromaprint in Rust?
Rust has [wasm-bindgen] which generates high level wrappers around Rust with
little extra code. I wanted to try it. It doesn't make sense to do the extra
work of rewriting C libraries just to use `wasm-bindgen`, but I wanted to
make a cool demo of WebAssembly.

### Why not just build a WASM wrapper around the C library and generate bindings with wasm bindgen?
I tried a bunch of things but couldn't get wasm-bindgen to work with a native
(non-rust) library. I kept running into link errors. [This guy seems to have
gotten it to work somehow.][insane]

### Why no Create React App?
I tried to use create-react-app with the bindings generated from
wasm-bindgen, but it doesn't seem like create-react-app supports wasm files.
[I even tried adding wasm support to create-react-app, but I couldn't get it
to work.][cra-pr]. Using a handrolled webpack configuration isn't that bad
actually.

### Why not use parcel instead?
I couldn't get the wasm-bindgen bindings to work with parcel. [Parcel doesn't
support WASM imports.][parcel-bug]

[parcel-bug]: https://github.com/parcel-bundler/parcel/issues/647
[cra-pr]: https://github.com/facebook/create-react-app/pull/6049
[insane]: https://github.com/rustwasm/wasm-bindgen/issues/178
[wasm-bindgen]: https://github.com/rustwasm/wasm-bindgen
[rust-chromaprint]: https://github.com/0xcaff/rust-chromaprint
