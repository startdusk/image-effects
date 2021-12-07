# image-effects
a wasm demo

初始化

```bash
$ mkdir image-effects && cd image-effects
$ cargo init --lib
$ npm init -y
$ npm i -D webpack webpack-cli webpack-dev-server
$ npm i -D html-webpack-plugin
```

配置 ts https://www.tslang.cn/docs/handbook/react-&-webpack.html

webpack 编译 rust
wasm-pack

```bash
$ npm i -D @wasm-tool/wasm-pack-plugin
```

然后配置到 webpack.config.js
运行编译会在目录下生成 pkg 文件夹，里面放的就是 rust 被编译成 js 文件

运行
```bash
$ yarn serve
```