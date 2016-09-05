var Firebase = require('firebase');
var commentsCtrl = function ($scope, $state, Comments, DateHandler) {

    $scope.$on('$ionicView.enter', function () {
        Comments.getComments($scope, $state, 'commentsSpinner');
    });

    $scope.send = function (comment) {
        if (comment != undefined) {
            var newData = {
                comment: comment,
                author: Firebase.auth().currentUser.displayName,
                father: localStorage.getItem('currentPost'),
                date: DateHandler.GetCurrentDate()
            };
            Comments.sendComment($scope, newData, 'commentList');
            comment = '';
        }
        else {
            alert('non puoi pubblicare un commento vuoto');
        }
    };

    Comments.getComments($scope, $state, 'commentsSpinner');

};

module.exports = commentsCtrl;
