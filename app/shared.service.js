const socket = io.connect('http://localhost:8080');
var userName = "";
var roomName = "";

(function() {

  angular
      .module("cotyping")
      .factory("SharedService", SharedService);

      function SharedService() {

        return {
          testFunction () {
            return "test..."
          },

          getSocket () {
            return socket;
          },

          setUserName (_userName) {
            userName = _userName;
          },

          getUserName () {
            return userName;
          },

          setRoomName (_roomName) {
            roomName = _roomName;
          },

          getRoomName () {
            return roomName;
          }
        }

      }

})();
