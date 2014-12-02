var apaStyle = angular.module('apaStyle', ['filtres']);

apaStyle.controller('ApaController', ['$scope', function($scope) {
	$scope.auteurs = [
	    {prenom:'', nom:''}];
	$scope.ajouterAuteur = function () {
	    $scope.auteurs.push({prenom:'', nom:''});
	}

	$scope.supprimerAuteur = function (id) {
	    $scope.auteurs.remove(id);
	}
}]);

var filtres = angular.module('filtres', []);
filtres.filter('initiales', function() {
    return function (nom) {
	return nom.charAt(0).toUpperCase() + '.';
    };
});
