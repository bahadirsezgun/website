require.config({
   waitSeconds: 200,
   paths: {
		    'angular': '../../jslib/lib/angular/angular',
			'anSanitize': '../../jslib/lib/angular/angular-sanitize',
			'uiMask': '../../jslib/lib/mask/mask.min',
	        'beinapp':'./beinapp',
	        'anroute': '../../jslib/lib/angular/angular-route',
	        'modulloader':'./modulloader',
			'antranslate': '../../jslib/lib/angular/angular-translate',
   },
   shim: {
	   'angular': {
           exports: 'angular'
       },
      'beinapp': {
           deps: ['angular']
       },
      'modulloader':{
    	   deps: ['angular','main']
       },
       'anSanitize': {
           deps: ['angular']
       },
       'antranslate': {
            deps: ['angular']
       },
       'uiMask': {
           deps: ['angular']
       },
      	'anroute': {
           deps: ['angular']
       }
      
   },
    deps :[]
});

requirejs(['angular','anSanitize','beinapp','modulloader','antranslate','anroute','uiMask'],
  function   (angular ,anSanitize,beinapp,modulloader,antranslate,anroute,uiMask ) {
	 
	  angular.element(document).ready(function() {
	      angular.bootstrap(document, ['BeinApp']);
	  });
	  
  });

