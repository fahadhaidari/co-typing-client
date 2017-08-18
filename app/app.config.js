(function() {

  angular
    .module("cotyping")
    .config(config);

  function config($stateProvider, $urlServiceProvider, $locationProvider) {

    $locationProvider.html5Mode(true);


    $stateProvider
      .state("story", {
        url: "/story",
        component: "story"
      });

    $stateProvider
      .state("home", {
        url: "/"
        // component: "story"
      });

    $stateProvider
      .state("rooms", {
        url: "/rooms",
        component: "roomList"
      });


    $urlServiceProvider.rules.otherwise({
      state: "home"
    })
  }

})();
