(function () {
    'use strict';

    angular
        .module('messages')
        .factory('messagesService', messagesService);

    messagesService.$inject = ['$http', 'ENV'];
    function messagesService($http, ENV) {
        var service = {
            getMessages: getMessages
        };

        return service;

        ////////////////
        function getMessages() {
            return $http({
                method: 'GET',
                url: ENV.apiEndpoint + 'messages',
                dataType: 'jsonp'
            });
        }
    }
})();