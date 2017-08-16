(function() {

  var app = angular
    .module("cotyping")
    .controller("StoryController", StoryController);

  function StoryController($scope, SharedService) {
    console.log("Story Controller");
    const vm = this;
    vm.sharedService = SharedService;

    vm.userName = vm.sharedService.getUserName();
    vm.roomName = vm.sharedService.getRoomName();

    vm.inputText = "";

    console.log("I user ", vm.userName);

    vm.keyUp = () => {
      console.log("Typing ", event.keyCode);
      let info = {
        userName: vm.userName,
        roomName: vm.roomName,
        // message: event.keyCode
        message: vm.inputText
      }
      socket.emit("message", info);
    }

    socket.on("message", function(_info) {
      console.log("User ", _info.userName, " typed ", _info.message);
      vm.inputText = _info.message;

      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
    });

  }

})();
