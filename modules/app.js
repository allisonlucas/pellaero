//IIFE FOR VARIABLE ENCAPSULATION
(function() {
  //CREATE MAIN ANGULAR MODULE AND INJECT DEPENDENCIES
  angular.module('pellaero', ['routerModule'])
    .controller('pellaeroCtrl', pellaeroController);

    function pellaeroController($state,$rootScope){
      var pellaeroCtrl = this;

      pellaeroCtrl.parallax = function () {
        // AJAX call for parallax function
        $('#mainVideo').parallax();
        $('.parallax').parallax();
      };

      pellaeroCtrl.accordion = function () {
        // AJAX call for accordion function
        $('.collapsible').collapsible({
          accordion : false
        });
      };

      pellaeroCtrl.collapsible = function () {
        // AJAX call for collapsible function
        $(document).ready(function(){
          $('.collapsible').collapsible();
        });
      };

    };

}());
