var discussionboard_app = angular.module('discussionboard_app', ['ngRoute', 'ngCookies']);

	discussionboard_app.config(function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl: './partials/indexuser.html',
				controller: 'userController',
				controllerAs: 'userCtrl'
			})
			.when('/dashboard', {
				templateUrl: './partials/dashboard.html',
				controller: 'dashboardController',
				controllerAs: 'dashboardCtrl'
			})
			.when('/topic/:topicId', {
				templateUrl: './partials/topic.html',
				controller: 'topicController',
				controllerAs: 'topicCtrl'
			})
	})