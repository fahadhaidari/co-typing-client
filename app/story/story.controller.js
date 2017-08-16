(function() {

  var app = angular
    .module("cotyping")
    .controller("StoryController", StoryController);

  function StoryController($scope, $state, $window, SharedService) {
    console.log("Story Controller");
    const vm = this;
    vm.sharedService = SharedService;

    vm.userName = vm.sharedService.getUserName();
    vm.roomName = vm.sharedService.getRoomName();

    vm.inputText = "";

    console.log("I user ", vm.userName);



    vm.keyUp = () => {
      console.log("Typing ", event.keyCode);
      let info = {
        userName: vm.userName,
        roomName: vm.roomName,
        // message: event.keyCode
        message: vm.inputText
      }
      socket.emit("message", info);
    }

    vm.signout = () => {
      console.log("Leaving room...");
      let info = {
        userName: vm.userName,
        roomName: vm.roomName
      }
      socket.emit("signout", info);
    }

    socket.on("message", function(_info) {
      console.log("User ", _info.userName, " typed ", _info.message);
      vm.inputText = _info.message;

      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
    });

    socket.on("user signout", function(_info) {
      console.log("User ", _info.userName, " left ", _info.roomName);

      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
    });

    socket.on("signout success", function(_info) {
      console.log("User ", _info.userName, " left ", _info.roomName);
      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
      $state.go("home");
    });


    $window.onbeforeunload = function(event) {
      vm.signout();
    }

  }

})();
