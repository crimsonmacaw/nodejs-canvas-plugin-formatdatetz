import { commonFunctions } from './common/functions';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['canvas'],
    name: 'canvas-plugin-boilerplate',
    uiExports: {
      hacks: [
        // register functions and the like things with canvas
        'plugins/canvas-github-demo/lib/load_plugin.js',
      ],
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server) {
      // load server functions here, then:
      commonFunctions.forEach(fn => server.plugins.canvas.addFunction(fn));

      // load any types as well:
      const types = [];
      types.forEach(fn => server.plugins.canvas.addType(fn));
    }
  });
}
