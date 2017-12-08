var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/formHandler', './assets/js/formHandler.js')
    .addStyleEntry('css/home', './assets/css/home.css')
    
    // this creates a 'vendor.js' file with jquery and the bootstrap JS module
    .createSharedEntry('vendor', [
        'jquery',
        'bootstrap',

        // you can also extract CSS - this will create a 'vendor.css' file
        'bootstrap-sass/assets/stylesheets/_bootstrap.scss',
        './assets/css/main.css',
        './assets/css/header.css',
        './assets/css/footer.css'
    ])

    // use Sass/SCSS files pre-processor
    .enableSassLoader()

    // init $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
