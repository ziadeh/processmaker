const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |

*/
mix.js('resources/assets/js/app.js', 'public/js')
  .extract(['vue','jquery','bootstrap-vue','axios','popper.js','lodash','bootstrap'])
  .sass('resources/assets/sass/layouts-app.scss', 'public/css')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .js('resources/assets/designer/js/designer.js', 'public/js')
    //.sass('resources/assets/designer/sass/designer.scss', 'public/css')
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
        }
    });

mix.styles([
    'resources/assets/css/custom.css',
    'resources/assets/css/styles_pm4.css',
    'resources/assets/designer/css/bpmn.css'
], 'public/css/vendorDesigner.css');

mix.copy('resources/assets/designer/fonts', 'public/fonts/bpmn');
mix.copy('resources/assets/designer/images', 'public/images');
