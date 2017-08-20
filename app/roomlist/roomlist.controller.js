// const socket = io.connect('http://localhost:8080');

(function() {


  var app = angular
    .module("cotyping")
    .controller("RoomListController", RoomListController);

  function RoomListController($http, SharedService) {
    console.log("Room Controller");
    const vm = this;
    vm.sharedService = SharedService;
    vm.roomName = "";

    vm.sharedService.setHideMainElements(true);

    vm.rooms = [
      // {
      //   name:"Room1",
      //   owner:"User1"
      // },
      // {
      //   name:"Room2",
      //   owner:"User2"
      // },
      // {
      //   name:"Room3",
      //   owner:"User3"
      // }
    ];


    // $http.get("http://localhost:3000/rooms").then((rooms) => {
    $http.get("https://cotyping-server.herokuapp.com/rooms").then((rooms) => {

      vm.rooms = rooms.data;
      console.log("Rooms ", rooms.data);
    })


    let socket = vm.sharedService.getSocket();
    socket.on("on connection", function(_message) {
      console.log("Message from the socket server ", _message);
    });

    vm.createRoom = function() {
      console.log("Creating room ", vm.roomName);
    }



  }

})();
