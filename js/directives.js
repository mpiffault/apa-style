apaStyle
.directive('sourceGlobal', function() {
  return {
    restrict: 'E',
    scope: {
      source: '=',
      sourceType: '='
    },
    templateUrl: 'templates/sourceGlobal.html'
  }
})
.directive('sourceGeneration', function($http, $compile) {
  return {
    restrict: 'E',
    templateUrl: function(elem, attr){
      return 'templates/'+attr.typeTemplate+'-generate.html'
    }
  }
})
.directive('sourceForm', function($http, $compile) {
  return {
    restrict: 'E',
    templateUrl: function(elem, attr){
      return 'templates/'+attr.typeTemplate+'-form.html'
    }
  }
});
