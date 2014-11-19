require.config({
    paths: {
        "jquery"		: "libs/jquery/jquery",
        "jquery-mobile"	: "libs/jquery-mobile/jquery.mobile",
        "jquery-ui"		: "libs/jquery-ui/jquery-1.10.2"
    },
    shim: {
        "jquery-ui": {
            deps: ["jquery"],
                        //custom export name, this would be lowercase otherwise
            exports: "$"
        }
    },
        //how long the it tries to load a script before giving up, the default is 7
    waitSeconds: 10
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'jquery-mobile', 'jquery-ui', 'app'], function($, jquerymobile, jqueryui, App){
    new App.initialize;
});