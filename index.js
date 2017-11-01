import { serverFunctions } from './server/functions';
import { commonFunctions } from './common/functions';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['canvas'],
    name: 'canvas-plugin-boilerplate',
    uiExports: {
      hacks: [
        // register functions and the like things with canvas
        'plugins/canvas-plugin-boilerplate/lib/load_plugin.js',
      ],
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server) {
      // register server and common functions in the client runtime
      serverFunctions.forEach(fn => server.plugins.canvas.addFunction(fn));
      commonFunctions.forEach(fn => server.plugins.canvas.addFunction(fn));

      // load any types as well:
      const types = [];
      types.forEach(fn => server.plugins.canvas.addType(fn));
    }
  });
}
