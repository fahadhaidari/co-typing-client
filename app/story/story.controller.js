(function() {

  var app = angular
    .module("cotyping")
    .controller("StoryController", StoryController);

    function StoryController(SharedService) {
      console.log("Story Controller");
      const vm = this;
      vm.sharedService = SharedService;

      vm.userName = vm.sharedService.getUserName();
      vm.roomName = vm.sharedService.getRoomName();

      console.log("I am the user " , vm.userName);

      vm.keyUp = (event) => {
        console.log("Typing ", event.keyCode);
        let info = {
          userName: vm.userName,
          roomName: vm.roomName,
          message: event.keyCode
        }
        socket.emit("message", info);
      }

    }

})();
