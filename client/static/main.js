var discussionboard_app = angular.module('discussionboard_app', ['ngRoute', 'ngCookies']);

	discussionboard_app.config(function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: './partials/indexuser.html',
				controller: 'userController',
				controllerAs: 'userCtrl'
			})
			
	})