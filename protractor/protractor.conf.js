'use strict';

var TARGET_FOLDER = 'target/',
    SCREENSHOTS_FOLDER = TARGET_FOLDER + 'screenshots/',
    JUNIT_FOLDER = TARGET_FOLDER + 'surefire-reports/';

var fs = require('fs');

exports.config = {

    onPrepare: function () {
        ensureDirectoryStructure();
        setupJUnitReporter();
        setupScreenGrabber();
    },

    framework: 'jasmine2',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['tests/*.spec.js', 'pages/*.page.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    },

    baseUrl: 'http://localhost:3000/'
};

function ensureDirectoryStructure() {
    if (!fs.existsSync(TARGET_FOLDER)) {
        fs.mkdirSync(TARGET_FOLDER);
    }

    if (!fs.existsSync(SCREENSHOTS_FOLDER)) {
        fs.mkdirSync(SCREENSHOTS_FOLDER);
    }
    
    if (!fs.existsSync(JUNIT_FOLDER)) {
        fs.mkdirSync(JUNIT_FOLDER);
    }
}

// Capture test results in JUnit format
function setupJUnitReporter() {
    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({
        savePath: JUNIT_FOLDER,
        consolidateAll: false,
        filePrefix: 'ui-test-'
    });
    jasmine.getEnv().addReporter(junitReporter);
}

// capture screenshot on failed test
// extract full html on failed test
function setupScreenGrabber() {
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.failedExpectations.length > 0) {
                var filename = SCREENSHOTS_FOLDER + 'failed-' + result.description + '-' + Date.now() + '.png';
                browser.takeScreenshot().then(function(png) {
                    var stream = fs.createWriteStream(filename);
                    stream.write(new Buffer(png, 'base64'));
                    stream.end();
                });
            }
        }
    });
}