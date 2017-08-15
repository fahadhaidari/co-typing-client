(function() {

  var app = angular
    .module("cotyping")
    .controller("RoomController", RoomController);

    function RoomController(SharedService) {
      console.log("Room Controller");
      const vm = this;
      vm.sharedService = SharedService;


      vm.joinRoom = () => {
        console.log("Joining room ", vm.room.name, " User ", vm.username);
        let info = {
          userName: vm.username,
          roomName: vm.room.name
        }

        socket.emit("join room", info);


      }

    }

})();
