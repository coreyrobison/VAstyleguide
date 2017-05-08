angular.module('app').directive('sidebarDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'shared/sidebar/sidebarView.html',
        link: function (scope, element, atts) {

            function dropdownFunc() {
                var x = document.getElementById("demoAcc");
                if (x.className.indexOf("panel") == -1) {
                    x.className += " panel";
                } else {
                    x.className = x.className.replace(" panel", "");
                }
            }

        }
    };
});