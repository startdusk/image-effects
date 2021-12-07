use wasm_bindgen::prelude::wasm_bindgen;
// use web_sys::console::log_1 as log;
use image::load_from_memory;
use base64::{decode, encode};
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    let base64_image_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_image_vector).unwrap();
    img = img.grayscale();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();

    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}