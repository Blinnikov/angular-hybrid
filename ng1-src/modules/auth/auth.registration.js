import module from './auth.module';

import './views/login.html';

import LoginController from './controllers/LoginController';

module
    .controller('LoginController', LoginController);

export default module;