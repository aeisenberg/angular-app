'use strict';

exports.config = {

    onPrepare: function () {
    },

    framework: 'jasmine2',

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