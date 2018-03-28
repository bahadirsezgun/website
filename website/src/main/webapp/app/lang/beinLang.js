beinApp.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', translationsEn);
	
	  $translateProvider.translations('de', translationsDe);

	  $translateProvider.translations('tr', translationsTr);

	  $translateProvider.useSanitizeValueStrategy('escape');
	
	  var userLang = navigator.language || navigator.userLanguage;
	  
	  var lang = "en";
	  if (userLang.substring(0,2) == "tr") {
	      lang = userLang.substring(0, 2);
	  }
	  
	  

	      $translateProvider.preferredLanguage(lang);
}]);