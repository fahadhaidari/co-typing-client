const socket = io.connect('http://localhost:8080');
var userName = "";

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
          }
        }

      }

})();
