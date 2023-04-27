const js = import("./node_modules/@winnnntttter/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});