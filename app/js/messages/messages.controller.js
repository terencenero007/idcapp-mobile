(function () {
    'use strict';

    angular
        .module('messages')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['messagesService','spinnerService'];
    function MessagesController(messagesService, spinnerService) {
        var vm = this;
        vm.getMessages = getMessages;
        vm.messages = [];

        activate();

        ////////////////

        function activate() {
            getMessages();
        }

        function getMessages() {
            spinnerService.showLoader();
            messagesService.getMessages().then(function (response) {
                vm.messages = response.data;
                spinnerService.hideLoader();
            });
        }
    }
})();