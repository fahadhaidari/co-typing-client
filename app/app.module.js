(function() {
  "use strict";

  var app = angular
    .module("cotyping", ["ui.router"])
    .controller("MainController", MainController);

    function MainController($scope, SharedService) {
      const vm = this;
      vm.sharedService = SharedService;
      console.log("MainController")
    }

})();
