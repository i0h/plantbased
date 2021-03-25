extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub fn greet() -> String {
    "Hello, plant-based-er".to_string()
}

pub fn readCsv() {
    let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmV-ya43VsyRE4ssuaQEFBjIzHDzNqLKkEeY3nMevKvNXNoc_BS0ZW2aa6POGT7Y3XCX8Z64QOLPeA/pub?output=csv";
    
}
