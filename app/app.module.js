(function() {
  "use strict";

  var app = angular
    .module("cotyping", ["ui.router", "ngclipboard"])
    .controller("MainController", MainController);

    function MainController($scope, SharedService) {
      const vm = this;
      vm.sharedService = SharedService;
      console.log("MainController")
    }

})();
