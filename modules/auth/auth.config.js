import module from './auth.registration';

import { loginState } from './auth.states';

module
    .config(['$stateRegistryProvider', configStateProvider]);

function configStateProvider($stateRegistryProvider) {
    $stateRegistryProvider.register(loginState);
}