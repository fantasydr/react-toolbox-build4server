// Demo application demonstrating server-side rendering of gulp built react-toolbox components
// ---------------------------------------------------------------------------------------------------------------------

// Start up a HTTP server
var fs = require('fs'),
    http = require('http'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    server = http.createServer(function (request, response) {

        // Define demo react component
        var component = require('./demo').default,
            compiledComponent = ReactDOMServer.renderToString(React.createElement(component), null, 2),
            compiledComponentStyle = fs.readFileSync('./react-toolbox/style.css').toString();

        // Handle request
        response.end(
            '<html>' +
                '<head>' +
                    '<title>React-Toolbox Server-Side rendered project DEMO</title>' +
                    '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
                '</head>' +
                '<body>' + '' +
                    '<style>' +
                        '@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);' +
                        '* { margin: 0; padding: 0; }' +
                        'html {' +
                            'font-family: "Roboto";' +
                            'font-size: 62.5%;' +
                        '}' +
                        compiledComponentStyle +
                    '</style>' +
                    compiledComponent +
                '</body>' +
            '</html>'
        );

    });

// Start HTTP server
server.listen(3001, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", 3001);
});
