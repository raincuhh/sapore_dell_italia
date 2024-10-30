const path = require("path");

module.exports = {
   entry: "./src/app/index.tsx",
   output: {
      path: path.resolve(__dirname, "public"),
      filename: "dist/bundle.js",
      publicPath: "/",
   },
   resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
         },
      ],
   },
   devServer: {
      static: {
         directory: path.resolve(__dirname, "public"),
      },
      historyApiFallback: true,
      open: true,
      port: 3000,
      hot: true,
      //publicPath: "/",
   },
   plugins: [],
   mode: "development",
   //mode: "production",
   /*
   optimization: {
      minimize: true,
   },
   performance: {
      hints: "warning",
   },
   */
};
