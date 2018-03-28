beinApp.controller('beincontroller', function ($scope, $translate) {

    $scope.ownAppComment = $translate.instant("ownAppCommentShort");
    $scope.easyBonusCalculationComment = $translate.instant("easyBonusCalculationCommentShort");
    $scope.expenseTrackingComment = $translate.instant("expenseTrackingCommentShort");
    $scope.potantialTrackingComment = $translate.instant("potantialTrackingCommentShort");

    $scope.oac = false;
    $scope.ebc = false;
    $scope.et = false;
    $scope.pt = false;

    $scope.ownAppCommentShortChange = function () {
        $scope.oac = true;
        $scope.ownAppComment = $translate.instant("ownAppComment");
    }

    $scope.ownAppCommentChange = function () {
        $scope.oac = false;
        $scope.ownAppComment = $translate.instant("ownAppCommentShort");
    }


    $scope.easyBonusCalculationShortChange = function () {
        $scope.ebc = true;
        $scope.easyBonusCalculationComment = $translate.instant("easyBonusCalculationComment");
    }

    $scope.easyBonusCalculationChange = function () {
        $scope.ebc = false;
        $scope.easyBonusCalculationComment = $translate.instant("easyBonusCalculationCommentShort");
    }


    $scope.expenseTrackingShortChange = function () {
        $scope.et = true;
        $scope.expenseTrackingComment = $translate.instant("expenseTrackingComment");
    }

    $scope.expenseTrackingChange = function () {
        $scope.et = false;
        $scope.expenseTrackingComment = $translate.instant("expenseTrackingCommentShort");
    }

    $scope.potantialTrackingShortChange = function () {
        $scope.pt = true;
        $scope.potantialTrackingComment = $translate.instant("potantialTrackingComment");
    }

    $scope.potantialTrackingChange = function () {
        $scope.pt = false;
        $scope.potantialTrackingComment = $translate.instant("potantialTrackingCommentShort");
    }
});