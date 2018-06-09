import module from './app.registration';
import { contentState } from './app.states';

module
    .config(['$stateRegistryProvider', configStateProvider])
    .run(onModuleRun);

function configStateProvider($stateRegistryProvider) {
    $stateRegistryProvider.register(contentState);
}

function onModuleRun() {
    console.log('Run app module');
}