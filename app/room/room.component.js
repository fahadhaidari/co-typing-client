(function() {

  var app = angular
    .module("cotyping")
    .component("room", {
      controller: "RoomController",
      urlTemplate: "./app/room/room.template.html"
    });


})();
