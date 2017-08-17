(function() {

  var app = angular
    .module("cotyping")
    .controller("RoomController", RoomController);

  function RoomController($state, $scope, SharedService) {
    console.log("Room Controller");
    const vm = this;
    vm.sharedService = SharedService;

    vm.username = "";

    vm.joinRoom = () => {
      if (isValidInput(vm.username)) {
        console.log("Joining room ", vm.room.name, " User ", vm.username);
        let info = {
          userName: vm.username,
          roomName: vm.room.name,
          users: vm.room.users
        }

        socket.emit("join room", info);

        socket.on("joined", function(_userName) {
          console.log("User ", _userName, " joined the room");
          vm.sharedService.setMessage("User " +  _userName + " joined the room");
          $scope.$applyAsync(function() {
            $scope.connected = 'TRUE';
          });
        });

        socket.on("success", function(_userName) {
          console.log("The message only to me is ", _userName);
          vm.sharedService.setUserName(_userName);
          vm.sharedService.setRoomName(info.roomName);
          $state.go('story');
        });

        socket.on("user exist", function(_userName) {
          console.log("User does exist");
        });

      }
    }

  }

  function isValidInput(_string) {
    var patt = /[a-z]/g;
    var result = patt.test(_string);
    if (_string.length > 2 && result) {
      return true;
    }
  }

})();
