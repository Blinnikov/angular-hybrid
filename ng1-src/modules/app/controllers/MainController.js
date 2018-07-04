import '@progress/kendo-ui/js/kendo.popup';
import '@progress/kendo-ui/js/kendo.multiselect.js';

function MainController($scope, $state) {
    $scope.onButtonClick = onButtonClick;

    function onButtonClick() {
        $state.go('login');
    }
}

MainController.$inject = ['$scope', '$state'];

export default MainController;
