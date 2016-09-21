/**
 *
 */

(function () {
    'use strict';

    angular
        .module('HomeView', [])
        .config(HomeConfig);

    /**
     * [HomeConfig description]
     * @param  {[type]} $stateProvider [description]
     * @return {[type]}                [description]
     * @ngInject
     */
    function HomeConfig ($stateProvider) {
        $stateProvider
            .state('root.home', {
                url: '/',
                views: {
                    'main@': {
                        templateUrl: getTemplateUrl('home'),
                        controller: HomeCtrl,
                        controllerAs: 'home'
                    }
                }
            });
    }

    /**
     * [HomeCtrl description]
     * @ngInject
     */
    function HomeCtrl ($rootScope, $scope) {

        var home = this;

        home.name = 'Devon Taylor';

    }
})();
