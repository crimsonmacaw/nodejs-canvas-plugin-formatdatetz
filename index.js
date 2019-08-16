export default function (kibana) {
  return new kibana.Plugin({
    require: ['interpreter', 'canvas'],
    name: 'canvas-plugin-formatdatetz',
    uiExports: {
      canvas: ['plugins/canvas-plugin-formatdatetz']
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
