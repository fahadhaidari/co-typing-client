(function() {

  var app = angular
    .module("cotyping")
    .controller("RoomController", RoomController);

    function RoomController() {
      console.log("Room Controller");
      const vm = this;

      vm.joinRoom = () => {
        console.log("Joining room ", vm.username)
      }

    }

})();
