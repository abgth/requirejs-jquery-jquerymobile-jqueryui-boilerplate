Requirejs jQuery jQuery-Mobile JQueryUI Boilerplate template
==================================================

 Boilerplate for jQuery, jQuery mobile and jQuery UI implementation in requirejs

* Install requirejs
```
sudo npm install -g requirejs
```


* Install bower
```
sudo npm install -g bower
```

* create a file in project directory : bower.json
```
{
    "name": "My Project",
    "version": "1.0.0",
    "dependencies": {
        "jquery": "latest",
        "jquery-mobile": "latest",
        "jquery-ui": "latest",  
        "requirejs": "latest"
    }
}
```


* create a file in project directory : bower.json
```
{
    "directory": "js/libs"
}
```


* run bower
```
bower install
```

* create js/main.js
```javascript
//configuring requirejs
require.config({
    paths: {
    // "library-name" : "path/to/file/without*.js*"
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
```
If there is any build problem showing while loading jQuery Mobile, you can go to [download page](http://jquerymobile.com/download/) and download manually. Point the library path to exact location.

* create js/app.js with custom js code
```javascript
define(["jquery", "jquery-mobile", "jquery-ui"], function($) {
    var init=function(){
    	console.log('Custom code starts here');

    	/* custom javascript codes starts here */




    	/* custom javascript codes ends here */
    };
    return { initialize : init };
});

```


* add require-js file in html file, 'js/main' will be output file
```html
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
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
        <link rel="stylesheet" href="css/main.css">
        <script data-main="js/main" src="js/libs/requirejs/require.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <!-- example from w3schools -->
        <!-- http://www.w3schools.com/jquerymobile/tryit.asp?filename=tryjqmob_dialog -->
        <div data-role="page" id="pageone">
          <div data-role="header">
            <h1>Welcome To My Homepage</h1>
          </div>

          <div data-role="main" class="ui-content">
            <p>Welcome!</p>
            <a href="#pagetwo">Go to Dialog Page</a>
          </div>

          <div data-role="footer">
            <h1>Footer Text</h1>
          </div>
        </div> 

        <div data-role="page" data-dialog="true" id="pagetwo">
          <div data-role="header">
            <h1>I'm A Dialog Box!</h1>
          </div>

          <div data-role="main" class="ui-content">
            <p>The dialog box is different from a normal page, it is displayed on top of the current page and it will not span the entire width of the page. The dialog has also an icon of "X" in the header to close the box.</p>
            <a href="#pageone">Go to Page One</a>
          </div>

          <div data-role="footer">
            <h1>Footer Text In Dialog</h1>
          </div>
        </div> 

    </body>
</html>
```

* create build/app.build.js
```javascript
({
	appDir: "../",
	baseUrl: "js",
	dir: "../../production",
	mainConfigFile:"./../js/main.js",
	name:"main",
	optimizeCss: "standard"
})
```

* create a shellscript to run  build/app.build.js
```sh
r.js -o build/app.build.js 
cd ./../production
# comment following line before running this file for first. if r.js is working,
# then you can remove unwanted files using following line. Otherwise you might lose all codes
rm build js/libs/jquery js/libs/jquery-ui/ js/libs/jquery-mobile/ js/libs/jquery-ui-tabs/ js/app.js build.txt bower.json -r
```
* run app.build.sh
```sh
bash bulid/app.build.sh
```

The directory *production*, contain all minified files 
```
requirejs-jquery-jquerymobile-jqueryui-boilerplate
|-- bower.json
|-- build
|   |-- app.build.js
|   `-- app.build.sh
|-- css
|   |-- jquery.mobile-1.4.5.min.css
|   `-- main.css
|-- index.html
|-- js
|   |-- app.js
|   |-- libs
|   |   |-- jquery
|   |   |-- jquery-hashchange
|   |   |-- jquery-mobile
|   |   |-- jquery-ui
|   |   |-- jquery-ui-tabs
|   |   `-- requirejs
|   `-- main.js
|-- LICENSE
`-- README.md
production/
|-- css
|   |-- jquery.mobile-1.4.5.min.css
|   `-- main.css
|-- index.html
|-- js
|   |-- libs
|   |   |-- jquery-hashchange
|   |   `-- requirejs
|   `-- main.js
|-- LICENSE
`-- README.md

```