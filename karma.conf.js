module.exports = function(config) {
    config.set({
        basePath: './',
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/components/**/*.test.js'
        ],
        exclude: [],
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher'
        ],
        junitReporter: {
            outputFile: 'tests/logs/unit.xml',
            suite: 'unit'
        }

    })
}