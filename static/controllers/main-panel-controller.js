angular
  .module("lidoControllers", ['ngMaterial'])
  .controller('DemoDialogController', function($scope) {
    $scope.users = [{
        firstName: 'Obi-Wan',
        lastName: 'Kenobi'
      }, {
        firstName: 'Boba',
        lastName: 'Fett'
      }, {
        firstName: 'Han',
        lastName: 'Solo'
      }];
  });
