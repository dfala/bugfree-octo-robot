angular.module('mailPants')

.factory('emailWrapper', function () {
	var service = {};

	var topWrapper = '<style type="text/css">img{ max-width: 100% !important; }</style>'
					+ '<div style="max-width: 100% !important; background-color: #eee; padding: 20px; overflow: auto;">'
					+ '<div style="max-width: 800px; margin: 20px auto; border-radius: 2px; padding: 25px; background-color: #fff; border: 1px solid #C2C2C2;">';

	service.topWrapper = function () {
		return topWrapper;
	}

	service.bottomWrapper = function (listId) {
		var uri = "http://localhost:3000/#/unsubscribe/" + listId + "/*|EMAIL|*";

		var bottomWrapper = '</div><p style="font-size: 10px; float: right;"><a href="' + uri + '" target="_blank">unsubscribe</a></p>'
						+ '</div>';

		return bottomWrapper;
	}

	return service;
})
