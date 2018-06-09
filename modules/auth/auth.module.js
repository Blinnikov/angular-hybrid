import angular from 'angular';

import uiRouter from '@uirouter/angularjs';

const auth = angular.module('auth', [uiRouter, 'kendo.directives', 'templates']);

export default auth;