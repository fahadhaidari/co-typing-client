(function() {

  var app = angular
    .module("cotyping")
    .controller("StoryController", StoryController);

  function StoryController($scope, $state, $window, $timeout, SharedService) {
    console.log("Story Controller");
    const vm = this;
    vm.sharedService = SharedService;

    vm.userName = vm.sharedService.getUserName();
    vm.roomName = vm.sharedService.getRoomName();

    vm.message = vm.sharedService.getMessage();

    vm.otherUserEdit = "";

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

      vm.otherUserEdit = _info.userName + " is typing";

      $timeout(function() {
       vm.otherUserEdit = "";
    }, 3000);

      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
    });

    socket.on("user signout", function(_info) {
      console.log("User ", _info.userName, " left ", _info.roomName);
      // vm.message = vm.sharedService.getMessage();
      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
    });

    socket.on("signout success", function(_info) {
      console.log("User ", _info.userName, " left ", _info.roomName);
      // vm.sharedService.setMessage("User " + _info.userName + " left " + _info.roomName);
      socket.emit("signed out", _info);
      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
      $state.go("home");
    });

    socket.on("signed out", function(_info) {
      console.log("User ", _info.userName, " left ", _info.roomName);
      vm.sharedService.setMessage("User " + _info.userName + " left " + _info.roomName);
      vm.message = vm.sharedService.getMessage();
      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
      // $state.go("home");
    });

    socket.on("joined", function(_userName) {
      console.log("User ", _userName, " joined the room");
      vm.message = vm.sharedService.getMessage();
      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });
    });


    $window.onbeforeunload = function(event) {
      vm.signout();
    }

  }

})();
