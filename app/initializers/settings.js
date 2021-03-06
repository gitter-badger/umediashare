export function initialize(container, application) {
   application.inject('route', 'settings', 'module:settings');
   application.inject('controller', 'settings', 'module:settings');
   application.inject('component', 'settings', 'module:settings');
   application.inject('module:discovery', 'settings', 'module:settings');
   application.inject('module:renderer', 'settings', 'module:settings');
}

export default {
  name: 'settings',
  before: 'discovery',
  initialize: initialize
};
