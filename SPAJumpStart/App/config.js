define(function () {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var imageSettings = {
        imageBasePath: '../content/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };

    var remoteServiceName = 'breeze/Breeze';

    var appTitle = 'SPAJumpStart';

    var routes = [
        {
            route: '',
            moduleId: 'viewmodels/sessions',
            title: 'Sessions',
            nav: true,
            settings: { caption: '<i class="icon-book"></i> Sessions' }
        }, {
            route: 'speakers',
            moduleId: 'viewmodels/speakers',
            title: 'Speakers',
            nav: true,
            settings: { caption: '<i class="icon-user"></i> Speakers' }
        }, {
            route: 'sessiondetail/:id',
            moduleId: 'viewmodels/sessiondetail',
            title: 'Edit Session',
            nav: false
        }, {
            route: 'sessionadd',
            moduleId: 'viewmodels/sessionadd',
            title: 'Add Session',
            nav: false,
            settings: { admin: true, caption: '<i class="icon-plus"></i> Add Session' }
        }];

    var startModule = 'viewmodels/sessions';

    return {
        appTitle: appTitle,
        debugEnabled: ko.observable(true),
        imageSettings: imageSettings,
        remoteServiceName: remoteServiceName,
        routes: routes,
        startModule: startModule
    };
});