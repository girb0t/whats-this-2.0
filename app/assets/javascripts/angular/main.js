
(function(){
  var app = angular.module("completedGames", []);


  app.controller("completedCtrl", [ '$scope', '$http', '$sce', function($scope, $http, $sce){
    $scope.games = [];
    $scope.body = '<div style="width:200px; height:200px; border:1px solid blue;"></div>';

    // for rendering svg as html
    $scope.renderHTML = function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

    $scope.roundWrapper = function(htmlCode, type) {
      if(type==="drawing") {
        html = '<div class="square-svg-container">'
        // html += '<div class="svg-container">'
        html += htmlCode
        html += '</div>'
        return html
      } else {
        html = '<div class="completed-square-description-container">'
        html += '<a href="#">'
        html += '<div class="completed-description-container-table">'
        html += '<div class="completed-description-container-table-cell">'
        html += htmlCode
        html += '</div></div></a></div>'
        return html
      }
    };

    $http.get('/get_completed_games').success(function(data){
      $scope.games = data
    })

  }])
})();






