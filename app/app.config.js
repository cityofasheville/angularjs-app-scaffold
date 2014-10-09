'use strict';

//instatiate an AngularJS module named uiApp
//inject an dependancy modules
var app = angular.module('appName', ['ui.router', 'ngAnimate']);
 
//Configure application states and routes
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          url: '/',
          controller: 'AppCtrl',
        })
        .state('app.component1', {
          url: 'component1',
          templateUrl: 'components/component1/component1.html',
          controller: 'Component1Ctrl',
        })
        .state('app.component2', {
          url: 'component2',
          templateUrl: 'components/component2/component1.html',
          controller: 'Component2Ctrl',
        })
    $urlRouterProvider.otherwise('/');
  });//END config
