describe('table controller', function () {

    var $scope, $controller, tableController, userService;

    beforeEach(function () { module('ngRoute') });
    beforeEach(function () { module('testApp.table') });

    beforeEach(inject(function (_$rootScope_, _$controller_, _userService_) {
        scope = _$rootScope_.$new();
        $controller = _$controller_;
        userService = _userService_;
        tableController = $controller('tableController', { $scope: scope });
    }));

    it('should be defined', function () {
        expect(tableController).toBeDefined();
    });

    describe('userService.getUsers() tests', function () {

        var serviceResult;

        it('should initialize with a call to userService.getUsers()', function () {
            expect(userService.getUsers).toHaveBeenCalled();
        });

        beforeEach(function () {
            serviceResult = {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };

            spyOn(userService, "getUsers").and.callThrough();

            tableController = $controller('tableController', { $scope: scope });
        });

        // it('should set the tableController.users object to the resolvedUser', function () {
        //     expect(tableController.users).toEqual(serviceResult);
        // });
    });
});