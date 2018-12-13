import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import EmberObject from '@ember/object';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

class C extends EmberObject {
  constructor() {
    super();
    this.text = 'hey'
  }
}

const c = C.create();
console.log(c.text);

loadInitializers(App, config.modulePrefix);

export default App;
