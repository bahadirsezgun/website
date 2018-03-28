beinApp.controller('beinMain', function($scope,$translate) {

    $scope.showTr = false;
	
    $scope.frmAction = "//beinplanner.us16.list-manage.com/subscribe/post?u=4ee8d070c7e15b6c2e507d4f5&amp;id=099a5760a6";

	$scope.changeLang=function(lang){
		$translate.use(lang);
		if (lang == "tr") {
		    $scope.showTr = true;
		    $scope.frmAction = "//beinplanner.us16.list-manage.com/subscribe/post?u=4ee8d070c7e15b6c2e507d4f5&amp;id=099a5760a6";

		} else {
		    $scope.showTr = false;
		    $scope.frmAction = "//beinplanner.us16.list-manage.com/subscribe/post?u=4ee8d070c7e15b6c2e507d4f5&amp;id=3c98bd00d9";

		}

		$translate.refresh;

		
	};



	$scope.init = function () {
	    var userLang = navigator.language || navigator.userLanguage;

	    var lang = "en";
	    if (userLang.substring(0, 2) == "tr") {
	        lang = userLang.substring(0, 2);

	    }
	   

	    if (lang == "tr") {
	        $scope.showTr = true;
	        $scope.frmAction = "//beinplanner.us16.list-manage.com/subscribe/post?u=4ee8d070c7e15b6c2e507d4f5&amp;id=099a5760a6";

	    } else {
	        $scope.showTr = false;
	        $scope.frmAction = "//beinplanner.us16.list-manage.com/subscribe/post?u=4ee8d070c7e15b6c2e507d4f5&amp;id=3c98bd00d9";

	    }
	   

	}

	


});