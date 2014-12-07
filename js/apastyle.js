var apaStyle = angular.module('apaStyle', ['filtres']);

apaStyle.controller('ApaCtrl', ['$scope', function($scope) {
	$scope.bibliography = {
		title: "",
		sources: [new ApaType()]
	};

	$scope.addSource = function () {
		$scope.bibliography.sources.push(new ApaType());
	};

	$scope.removeSource = function(id) {
		$scope.bibliography.sources.remove(id);
	};
}])

var filtres = angular.module('filtres', []);
filtres.filter('initiales', function() {
    return function (nom) {
	return nom.charAt(0).toUpperCase() + '.';
    };
});
