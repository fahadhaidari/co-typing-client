(function() {

  var app = angular
    .module("cotyping")
    .component("roomList", {
      controller: "RoomListController",
      templateUrl: "app/room/roomlist.template.html",
      bindings: {
        data: "<"
      }

    });

})();
