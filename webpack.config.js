const path = require('path')
// const globule = require('globule')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

/**
 * 設定
 */
const dir = {
  src: 'src',
  dist: './',
  assets: 'assets'
}

const distDir = dir.dist ? dir.dist : dir.assets
const baseDir = './'
const PROXY = null

const settings = {
  sass: [
    true,
    { compressed: false }
  ]
}

/**
 * エントリーポイントの指定
 */
const entryPoints = {
  main: [ `./${dir.src}/scripts/main.js`, `./${dir.src}/styles/common.css` ]
}

if (settings.sass[0]) {
  entryPoints.main[1] = `./${dir.src}/styles/common.scss`
}

/**
 * browserSync
 */
const browserOptions = {
  host: 'localhost',
  port: 3000,
  open: 'external',
  server: { baseDir: baseDir }
}

/**
 * exports
 */
module.exports = (env, argv) => {
  const isDev = process.env.NODE_ENV !== "production"

  return {
    entry: {
      ...entryPoints
    },
    output: {
      path: path.resolve(__dirname, dir.dist),
      filename: `./${dir.assets}/scripts/[name].bundle.js`
    },
    mode: argv.mode,
    devtool: argv.mode === 'production' ? false : 'source-map',
    cache: true,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          // 並列処理の実行を有効化
          // 同時に実行するを数値を設定
          // parallel: 4,
          // // swcを有効化
          // // minify: TerserPlugin.swcMinify,
          // // Minify Optionsを設定
          // terserOptions: {
          //   // 最適化
          //   compress: {
          //     ecma: 5,
          //     warnings: false,
          //     comparisons: false,
          //     inline: 2,
          //   },
          //   // 変数名を短く
          //   mangle: {
          //     safari10: true,
          //   },
          // },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          // loader: 'babel-loader',
          // options: {
          //   presets: [ '@babel/preset-env' ]
          // }
        },
        {
          test: /\.(css|s[ac]ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: isDev
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDev
              }
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  // fiber: require('fibers'),
                  outputStyle: settings.sass[1].compressed ? 'compressed' : 'expanded',
                },
                sourceMap: isDev
              }
            }
          ]
        },
        {
          test: /.(png|svg|jpe?g|gif)$/,
          type: "asset/resource",
          generator: {
            filename: `./${dir.assets}/img/[name].[ext]`
          }
        }
      ]
    },

    plugins: [
      new BrowserSyncPlugin(browserOptions),
      new MiniCssExtractPlugin({
        filename: `./${dir.assets}/styles/common.css`
      }),
      new CopyPlugin({
        patterns: [
          {
            from: `${dir.src}/img/`,
            to: path.resolve(__dirname, `${dir.dist}${dir.assets}/img/`),
          },
        ],
      }),
    ],
    resolve: {
      extensions: [ '.js', '.json' ]
    },
    // ES5(IE11等)向けの指定
    // target: [ 'web', 'es5' ]
  }
}
