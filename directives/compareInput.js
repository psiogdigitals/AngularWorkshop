(function(){
    var Directive,
        _DirectiveName = "compareInput";
    Directive = (function() {
        function Directive() {
            return {
                require: "ngModel",
                scope: {
                    otherModelValue: "=compareInput"
                },
                link: function(scope, element, attributes, ngModel) {

                    ngModel.$validators.compareInput = function(modelValue) {
                        return modelValue == scope.otherModelValue;
                    };

                    scope.$watch("otherModelValue", function() {
                        ngModel.$validate();
                    });
                }
            }
        }
    })();
    angular.module('app').directive(_DirectiveName,["$scope",Directive]);
}).call(this);
