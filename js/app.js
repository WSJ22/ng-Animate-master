/**
 * Created by queen on 17-5-27.
 */

var app=angular.module('app',['ngAnimate']);
app.controller('AppController',function ($scope,$timeout) {
    $scope.list=[];
    $scope.currentAnimation;
    $scope.isShow=true;
    $scope.animations= ["toggle",
        "spin-toggle",
        "scale-fade",
        "scale-fade-in",
        "bouncy-scale-in",
        "flip-in",
        "slide-left",
        "slide-right",
        "slide-top",
        "slide-down",
        "bouncy-slide-left",
        "bouncy-slide-right",
        "bouncy-slide-top",
        "bouncy-slide-down",
        "rotate-in"];
    $scope.addItem=function (animation) {
        $scope.animation=animation;
        for (var i=0;i<3;i++) {
            $timeout(function () {
                $scope.list.push({title: 'item'})
            }, 100*i)
        }

    }
    $scope.removeItem=function (item) {
        var index=$scope.list.indexOf(item);
        $scope.list.remove(index);
    }
    $scope.cleanList=function () {
        for(var i=0;i<$scope.list.length;i++){
            $timeout(function () {
                $scope.list.pop()
            },100*i)
        }
    }
    $scope.autoPlayAnimation=function (index) {
        var animation=$scope.animations[index];
        if(animation){
            $scope.currentAnimation=animation;
            $scope.addItem(animation);
            $timeout(function () {
                $scope.cleanList();
            },1000);
            $timeout(function () {
                $scope.autoPlayAnimation(++index);
            },2000)
        }else {
            $scope.currentAnimation=undefined
        }
    }
    $scope.switchGridMode = function () {
        $scope.layoutMode = 0;
    }

    $scope.switchListMode = function () {
        $scope.layoutMode = 1;
    }

    $scope.toggle = function () {
        $scope.isShow = !$scope.isShow;
    }
});
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
