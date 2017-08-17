(function() {

  var app = angular
    .module("cotyping")
    .controller("RoomController", RoomController);

  function RoomController(SharedService, $state) {
    console.log("Room Controller");
    const vm = this;
    vm.sharedService = SharedService;


    vm.joinRoom = () => {
      console.log("Joining room ", vm.room.name, " User ", vm.username);
      let info = {
        userName: vm.username,
        roomName: vm.room.name,
        users: vm.room.users
      }

      socket.emit("join room", info);

      socket.on("joined", function(_userName) {
        console.log("User ", _userName, " joined the room");
      });

      socket.on("success", function(_userName) {
        console.log("The message only to me is ", _userName);
        vm.sharedService.setUserName(_userName);
        vm.sharedService.setRoomName(info.roomName);
        $state.go('story');

      });


    }

  }

})();
