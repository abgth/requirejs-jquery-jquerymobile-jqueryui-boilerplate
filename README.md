requirejs-jquery-jquerymobile-jqueryui-boilerplate
==================================================

Boilerplate for jQuery, jQuery mobile and jQuery UI implementation in requirejs
# Install bower

sudo npm install -g bower



#create a file in project directory : bower.json
{
    "name": "My Project",
    "version": "1.0.0",
    "dependencies": {
          //the value is the version you want,
         // if you enter null it grabs the latest release
        "jquery": "1.9",
        "jquery-mobile": "1.4.5",
        "jquery-ui": null,  //remove this if not using
        "requirejs": null
    }
}

#create a file in project directory : bower.json

{
    "directory": "js/libs"
}

#run bower
bower install

# add require-js in html file, 'js/main' will be output file
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Requirejs with Backbone example</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link rel="stylesheet" href="css/main.css">
        <script data-main="js/main" src="js/libs/requirejs/require.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <!-- Add your site or application content here -->
        <p>Hello world! This is HTML5 Boilerplate.</p>
    </body>
</html>

# create main.js
// setting library paths for requirejs
require.config({
    paths: {
        "jquery"		: "libs/jquery/jquery",
        "jquery-mobile"	: "libs/jquery/jquery-mobile",
        "jquery-ui"		: "libs/jquery/jquery-ui"
    },
    shim: {
        "jquery-ui": {
            deps: ["jquery"],
                        //custom export name, this would be lowercase otherwise
            exports: "jqueryui"
        }
    },
        //how long the it tries to load a script before giving up, the default is 7
    waitSeconds: 10
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'jquery-mobile', 'jquery-ui', 'app'], function($, jquerymobile, jqueryui, App){
    new App;
});

# create app.js with project js code
define(['jquery', 'jquery-mobile', 'jquery-ui'], function($, jquerymobile, jqueryui){
    console.log("it's working!"); //
});