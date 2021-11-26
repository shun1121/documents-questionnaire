// https://qiita.com/park-jh/items/c31784c950561521d035
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  devtool: "source-map",
  // モード値をproductionに設定すると最適化される状態で、
  // developmentに設定するとソースマップ有効でJSファイルが出力される。
  mode: "development",

  // メインとなるjavascriptファイル（エントリーポイント）
  entry: "./src/main.tsx",
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 拡張子.tsもしくは.tsxの場合
        test: /\.tsx?$/,
        // TypeScriptをコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import文で.tsや.tsxファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    // historyApiFallback: true,
    // hot: true,
    // port: 5000,
    // open: true
  },
}
