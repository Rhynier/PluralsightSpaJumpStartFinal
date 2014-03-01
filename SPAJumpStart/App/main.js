require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins' : '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

// Durandal 2.x assumes no global libraries. It will ship expecting 
// Knockout and jQuery to be defined with requirejs. .NET 
// templates by default will set them up as standard script
// libs and then register them with require as follows: 
define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'plugins/router', 'services/logger'], boot);

function boot (app, viewLocator, system, router, logger) {

    // Enable debug messages to show in the console
    system.debug(true);

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function () {
        // When finding a module, replace the viewmodel string 
        // with view to find it partner view.
        // [viewmodel]s/sessions --> [view]s/sessions.html
        // Otherwise you can pass paths for modules, views, partials
        // Defaults to viewmodels/views/views. 
        viewLocator.useConvention();

        app.setRoot('viewmodels/shell', 'entrance');
        
        // override bad route behavior to write to 
        // console log and show error toast
        router.handleInvalidRoute = function(route, params) {
            logger.logError('No route found', route, 'main', true);
        };
    });

};