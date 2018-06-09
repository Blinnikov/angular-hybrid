import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import '@progress/kendo-ui/js/kendo.angular';

import '@progress/kendo-ui/css/web/kendo.bootstrap-v4.min.css';

const app = angular.module("app", ['auth', uiRouter, "kendo.directives", 'templates']);

export default app;