// TODO: internalize this wrapper
import Fn from '../../../kibana-canvas/common/functions/fn.js';

export default new Fn({
  name: 'canary',
  type: 'render',
  fn(context, args) {
    console.log('CANARY', context, args);
    return {
      type: 'render',
      as: 'markdown',
      value: {
        content: 'chirp chirp',
      },
    };
  }
});
