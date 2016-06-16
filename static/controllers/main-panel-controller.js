angular
    .module("lido", ['ngMaterial'])
    .controller("MainPanelController", function(){
        var panelRef;
        function showPanel($event) {
            var panelPosition = $mdPanelPosition
                .absolute()
                .top('50%')
                .left('50%');

            var panelAnimation = $mdPanelAnimation
                .targetEvent($event)
                .defaultAnimation('md-panel-animate-fly')
                .closeTo('.show-button');

            var config = {
              attachTo: angular.element(document.body),
              controller: DialogController,
              controllerAs: 'ctrl',
              position: panelPosition,
              animation: panelAnimation,
              targetEvent: $event,
              template: 'dialog-template.html',
              clickOutsideToClose: true,
              escapeToClose: true,
              focusOnOpen: true
            }

            panelRef = $mdPanel.create(config);
            panelRef.open()
                .finally(function() {
                    panelRef = undefined;
                });
        }
    });
