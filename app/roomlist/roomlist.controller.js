(function() {

  var app = angular
    .module("cotyping")
    .controller("RoomListController", RoomListController);

    function RoomListController($http) {
      console.log("Room Controller");
      const vm = this;
      vm.rooms = [
        {
          name:"Room1",
          owner:"User1"
        },
        {
          name:"Room2",
          owner:"User2"
        },
        {
          name:"Room3",
          owner:"User3"
        }

    ];


      // $http.get("http://localhost:8080/").then((rooms) => {
      //   vm.rooms = rooms.data;
      //   console.log("Rooms " , rooms);
      // })



    }

})();
