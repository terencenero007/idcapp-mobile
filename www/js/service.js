(function () {

    'use strict';

    angular.module('idc-mobile-app.service', [])

        .factory('api', function ($http) {

            var service = {
                getEvents: getEvents
            };
            return service;

            function getEvents() {
                return $http({
                    method: 'GET',
                    url: 'http://idcapp-service.herokuapp.com/messages',
                    dataType: 'jsonp'
                });
            }
        });
})();