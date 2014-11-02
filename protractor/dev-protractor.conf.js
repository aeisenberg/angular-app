'use strict';

exports.config = {

    onPrepare: function () {
        var fs = require('fs');
        require('jasmine-reporters');

        if (!fs.existsSync('target')) {
            fs.mkdirSync('target');
        }
        if (!fs.existsSync('target/surefire-reports')) {
            fs.mkdirSync('target/surefire-reports');
        }
        if (!fs.existsSync('target/screenshots')) {
            fs.mkdirSync('target/screenshots');
        }

        // capture screenshot on failed test
        // extract full html on failed test
        var originalAddMatcherResult = jasmine.Spec.prototype.addMatcherResult;
        jasmine.Spec.prototype.addMatcherResult = function () {
            if (!arguments[0].passed()) {
                var filename = 'target/screenshots/failed-' + this.getFullName() + '-' + Date.now();
                element(by.css('html')).getOuterHtml().then(function(html) {
                    fs.writeFile(filename + '.html', html);
                });
                browser.takeScreenshot().then(function(png) {
                    var stream = fs.createWriteStream(filename + '.png');
                    stream.write(new Buffer(png, 'base64'));
                    stream.end();
                });
            }
            return originalAddMatcherResult.apply(this, arguments);
        };

        return jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('target/surefire-reports/'));
    },

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['tests/*.spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    },

    baseUrl: 'http://localhost:3000/'
};