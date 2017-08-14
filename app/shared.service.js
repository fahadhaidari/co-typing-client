const socket = io.connect('http://localhost:8080');


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
          }
        }

      }

})();
