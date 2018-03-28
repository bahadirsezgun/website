beinApp.controller('beinLicence', function ($scope, $translate) {

    $scope.licenceAggr = "licence_aggrement.docx";
    

    $scope.changeLangLicence = function (lang) {
        $translate.use(lang);
        $translate.refresh;
        if (lang == "tr") {
            $scope.licenceAggr = "/licence/sozlesme_musteri.docx";
        } else {
            $scope.licenceAggr = "/licence/licence_aggrement.docx";
        }

    }

    $scope.initLicence = function () {
        var userLang = navigator.language || navigator.userLanguage;

        var lang = "en";
        if (userLang.substring(0, 2) == "tr") {
            lang = userLang.substring(0, 2);
            $scope.licenceAggr = "sozlesme_musteri.docx";
        }
    }

    $scope.downloadFile = function () {
        $("#form2").submit();
    }
    

});