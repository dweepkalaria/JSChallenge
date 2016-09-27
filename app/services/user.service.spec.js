describe('Test Services', function () {
    var userService, $httpBackend, $q, $httpBackend;

    beforeEach(function () {
        module('testApp.services')
    });

    beforeEach(inject(function (_userService_, _$httpBackend_, _$q_) {
        userService = _userService_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;
    }));

    // A simple test to verify the user.service exists
    it('should exist', function () {
        expect(userService).toBeDefined();
        expect($httpBackend).toBeDefined();
        expect($q).toBeDefined();
    });

    describe('.getUsers()', function () {
        it('should exist', function () {
            expect(userService.getUsers).toBeDefined();
        });
        it('should return users', function () {
            expect(userService.getUsers().then(function (data) {
                return data;
            })).toBeDefined();
        });

        var result;
        var api = "http://jsonplaceholder.typicode.com/posts";
        var firstResult = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

        beforeEach(function () {
            result = {};
            spyOn(userService, "getUsers").and.callThrough();
        });

        it('should return first user', function () {

            $httpBackend.whenGET(api).respond(200, $q.when(firstResult));

            expect(userService.getUsers).not.toHaveBeenCalled();
            expect(result).toEqual({});

            userService.getUsers()
                .then(function (data) {
                    result = data;
                });

            // Flush pending HTTP requests
            $httpBackend.flush();

            expect(userService.getUsers).toHaveBeenCalled();
            expect(result.userId).toEqual(1);
            expect(result.id).toEqual(1);
            expect(result.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");

        });
    });
});