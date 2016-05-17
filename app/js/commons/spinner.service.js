(function () {
    'use strict';

    angular
        .module('commons')
        .factory('spinnerService', spinnerService);

    spinnerService.$inject = ['$rootScope', '$ionicLoading'];
    function spinnerService($rootScope, $ionicLoading) {
        var service = {
            showLoader: showLoader,
            hideLoader: hideLoader
        };

        return service;

        ////////////////
        function showLoader() {
            $ionicLoading.show({
                template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Loading...',
                delay: 100
            });
        }

        function hideLoader() {
            $ionicLoading.hide();
        }
    }
})();