(function () {
    'use strict';

    angular
        .module('messages')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['messagesService'];
    function MessagesController(messagesService) {
        var vm = this;
        vm.messages = [];

        activate();

        ////////////////

        function activate() {

            getMessages();
        }

        function getMessages() {
            messagesService.getMessages().then(function (response) {
                vm.messages = response.data;
            });
        }
    }
})();