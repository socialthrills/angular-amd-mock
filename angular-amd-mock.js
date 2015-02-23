/* global angular */
module.exports = angular.amd = {
    module : function (moduleName) {
        'use strict';
        return angular.module(moduleName, []);
    }
};
