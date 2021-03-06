// const socket = io.connect('http://localhost:3000');
const socket = io.connect('https://cotyping-server.herokuapp.com');

var userName = "";
var roomName = "";
var message = "";
var hideMainElements = false;
var users = [];

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
          },

          setMessage (_message) {
            message = _message;
          },

          getMessage () {
            return message;
          },

          setHideMainElements(_bool) {
            hideMainElements = _bool;
          },

          getHideMainElements() {
            return hideMainElements;
          },

          setUser(_user) {
            users.push(_user);
          },

          getUsers() {
            return users;
          },

          removeUser(_userName) {
            for (var i = 0; i < users.length; i++) {
              if(users[i] == _userName) {
                users.splice(i, 1);
              }
            }
          }
        }

      }

})();
