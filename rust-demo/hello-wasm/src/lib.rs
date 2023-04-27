// 在 Rust 当中，库被称为“crates”，因为我们使用的是一个外部库，所以有 "extern"。
extern crate wasm_bindgen;

// 引入 wasm_bindgen::prelude 的全部模块
use wasm_bindgen::prelude::*;

// 在 Rust 中调用来自 JavaScript 的外部函数
// 在 #[] 中的内容叫做 "属性"，并以某种方式改变下面的语句。在这种情况下，下面的语句是一个 extern，它将告诉 Rust that 我们想调用一些外部定义的函数。这个属性告诉我们 "wasm-bindgen 知道如何找到这些函数"。
#[wasm_bindgen]
extern {
    // 用 Rust 写的函数签名。它告诉我们 "alert 函数接受一个叫做 s 的字符串作为参数"，alert是js中的函数
    pub fn alert(s: &str);
}

// 我们又看到了 #[wasm_bindgen] 属性。在这里，它并非定义一个 extern 块，而是 fn，这代表我们希望能够在 JavaScript 中使用这个 Rust 函数。这和 extern 正相反：我们并非引入函数，而是要把函数给外部世界使用。
// 这个函数的名字是 greet，它需要一个参数，一个字符串（写作 &str）。它调用了我们前面在 extern 块中引入的 alert 函数。它传递了一个让我们串联字符串的 format! 宏的调用。
// format! 在这里有两个参数，一个格式化字符串和一个要填入的变量。格式化字符串是 "Hello, {}!" 部分。它可以包含一个或多个 {}，变量将会被填入其中。传递的变量是 name，也就是这个函数的参数。所以当我们调用 greet("Steve")时我们就能看到 "Hello, Steve!"。
// 这个传递到了 alert()，所以当我们调用这个函数时，我们应该能看到他谈弹出了一个带有 "Hello, Steve!" 的消息框。
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
