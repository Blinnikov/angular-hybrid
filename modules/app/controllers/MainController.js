import '@progress/kendo-ui/js/kendo.popup';
import '@progress/kendo-ui/js/kendo.multiselect.js';

const defaultSelectedItem = [{ ProductName: "Chai", ProductID: 1 }];

function MainController($scope) {
    $scope.selectOptions = {
        placeholder: "Select products...",
        dataTextField: "ProductName",
        dataValueField: "ProductID",
        dataSource: {
            transport: {
                read: {
                    url: "http://demos.telerik.com/kendo-ui/service/products",
                    dataType: "jsonp"
                }
            }
        }
    };
    $scope.selectedItems = defaultSelectedItem;
}

MainController.$inject = ['$scope'];

export default MainController;
