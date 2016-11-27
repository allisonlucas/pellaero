//IIFE FOR VARIABLE ENCAPSULATION
(function() {
  angular.module('routerModule', ['ui.router'])

    .run(function ($state,$rootScope) {
      $rootScope.$state = $state
      $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
    })

    .config(configRouter);

    configRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configRouter($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'partials/home.html',
          controller: 'pellaeroCtrl as pellaeroCtrl'
        })
        .state('about',{
          url: '/about',
          templateUrl: 'partials/about.html'
        })
        .state('product',{
          url: '/product',
          templateUrl: 'partials/product.html'
        })
        .state('faq',{
          url: '/FAQ',
          templateUrl: 'partials/faq.html',
          controller: 'pellaeroCtrl as pellaeroCtrl'
        })
        .state('contact',{
          url: '/contact',
          templateUrl: 'partials/contact.html'
        })
      $urlRouterProvider.otherwise('/');
    };
}());
