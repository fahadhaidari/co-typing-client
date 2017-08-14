(function() {

  var app = angular
    .module("cotyping")
    .component("room", {
      controller: "RoomController",
      templateUrl: "app/room/room.template.html",

      bindings: {
        room : "<",
        username : "<"
      }

    });

})();
