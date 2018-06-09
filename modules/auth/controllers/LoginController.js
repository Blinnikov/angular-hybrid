const defaultSelectedItem = [{ ProductName: "Chai", ProductID: 1 }];

function LoginController($scope) {
    $scope.login = login;
    
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

    function login() {
        console.log('Processing login');
    }
}

LoginController.$inject = ['$scope'];

export default LoginController;