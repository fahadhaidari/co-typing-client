(function() {

  var app = angular
    .module("cotyping")
    .controller("StoryController", StoryController);

    function StoryController(SharedService) {
      console.log("Story Controller");
      const vm = this;
      vm.sharedService = SharedService;

      vm.userName = vm.sharedService.getUserName();


      console.log("I am the user " , vm.userName);



      vm.test = () => {

      }

    }

})();
