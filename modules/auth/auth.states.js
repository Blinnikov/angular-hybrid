import template from './views/login.html';

export const loginState = {
    name: 'login',
    url: '/login',
    template,
    parent: 'content',
    controller: 'LoginController'
};