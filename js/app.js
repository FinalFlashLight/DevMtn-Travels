angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('packages', {
                url: '/packages/:country',
                templateUrl: '../views/packages.html',
                controller: 'packagesCtrl'
            })
            .state('locations', {
                url: '/location',
                templateUrl: '../views/locations.html',
                controller: 'locationCtrl'
            })
            .state('booked', {
                url: '/booked/:id',
                templateUrl: '../views/booked.html'
            })
            .state('adventurers', {
                url: '/adventurers/',
                parent: 'home',
                templateUrl: '../views/about-adventurers.html'
            })
            .state('contact', {
                url: '/contact',
                parent: 'home',
                templateUrl: '../views/contact.html'
            })

        $urlRouterProvider
            .otherwise('/');
    });
