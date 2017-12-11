var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setManifestKeyPrefix('build')
    .setPublicPath(Encore.isProduction() ? '/build' : '/fhuszti/portfolio-v4/portfolio/public/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // homepage assets
    .addStyleEntry('css/home', './assets/css/home.css')
    .addEntry('js/formHandler', './assets/js/formHandler.js')

    // classic CV page assets
    .addStyleEntry('css/resume', './assets/css/resume.css')

    // interactive CV page assets
    .addStyleEntry('css/interactive', './assets/css/interactive.css')
    .addEntry('js/interactive', './assets/js/interactive.js')

    // projects page assets
    .addStyleEntry('css/projects', './assets/css/projects.css')
    
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

    // mini-header css
    .addStyleEntry('css/header_mini', './assets/css/header_mini.css')

    // use Sass/SCSS files pre-processor
    .enableSassLoader()

    // init $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
