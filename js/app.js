angular.module('mailPants', ['textAngular', 'ngRoute'])

.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/home.html'
	})

	.when('/login', {
		templateUrl: '/templates/login.html'
	})

	.when('/email-list', {
		templateUrl: '/templates/emailList.html',
		resolve: {
			emailUser: function ($rootScope, $location) {
				if (!$rootScope.userEmail) return $location.path('/login');
				return $rootScope.userEmail;
			}
		}
	})

	.when('/compose-email', {
		templateUrl: '/templates/composeEmail.html',
		resolve: {
			emailUser: function ($rootScope, $location) {
				if (!$rootScope.userEmail) return $location.path('/login');
				return $rootScope.userEmail;
			}
		}
	})

	.when('/dashboard', {
		templateUrl: '/templates/dashboard.html',
		resolve: {
			emailUser: function ($rootScope, $location) {
				if (!$rootScope.userEmail) return $location.path('/login');
				return $rootScope.userEmail;
			}
		}
	})

	.otherwise('/');
});
