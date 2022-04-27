// https://nodejs.org/api/process.html#process_process_hrtime_time
const { hrtime } = require("process");
const TerserPlugin = require("terser-webpack-plugin");
const start = hrtime.bigint();

require('esbuild').build({
  entryPoints: ['./three.demo.js'],
  bundle: true,
  outfile: './esbuild.out.js',
  minify: true,
}).then(
  () => {
    const end = hrtime.bigint();
    console.log(`esbuild took \u001b[38;5;214m${end - start} \u001b[0mnanoseconds`);
    process.exit(0)
  }
)

// require("webpack")({
//   entry: "./three.demo.js",
//   mode: "production",
//   output: { path: __dirname, filename: "./webpack.out.js" },
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin({ extractComments: false })]
//   }
// }, () => {
//   const end = hrtime.bigint();
//   console.log(`webpack took \u001b[38;5;214m${end - start} \u001b[0mnanoseconds`);
//   process.exit(0)
// })
