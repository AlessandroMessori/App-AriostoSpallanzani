import Firebase from "firebase";

class commentsCtrl {

    constructor($scope, $rootScope, $state, Comments, DateHandler, Modals) {

        Comments.getComments($scope, $rootScope, $state, "commentsSpinner");

        $scope.$on("$ionicView.enter", () => {
            $scope.comment = "";
            Comments.getComments($scope, $rootScope, $state, "commentsSpinner");
        });

        $scope.send = (comment) => {
            if (comment != undefined) {
                const newData = {
                    comment: comment,
                    author: Firebase.auth().currentUser.displayName,
                    authorID: Firebase.auth().currentUser.uid,
                    father: $rootScope.currentPost,
                    contentType: $rootScope.contentType,
                    fatherID: $rootScope.currentPostAuthor,
                    date: DateHandler.GetCurrentDate(),
                    userMail: Firebase.auth().currentUser.email
                };

                Comments.sendComment($scope, newData, "commentList", () => {
                    document.getElementById("commentList").style.display = "block";
                    Comments.getComments($scope, $rootScope, $state, "commentsSpinner");
                });

                $scope.comment = "";
                $scope.$apply();
            }
            else {
                Modals.ResultTemplate("non puoi pubblicare un commento vuoto");
            }
        };
    }

}

export default commentsCtrl;
