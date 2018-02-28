export const canary = () => ({
  name: 'canary',
  type: 'render',
  fn(context, args) {
    return {
      type: 'render',
      as: 'markdown',
      value: {
        content: 'chirp chirp',
      },
    };
  }
});
