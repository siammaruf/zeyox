let mix = require('laravel-mix');

/**
 * Autoload jQuery
 */
 mix.autoload({
    jquery: [ '$', 'window.jQuery', 'jQuery' ]
});

mix.js('scripts/app.js', 'js').setPublicPath('dist');
mix.sass('sass/app.scss', 'css').setPublicPath('dist');