export const hello = {
  name: 'hello',
  type: 'render',
  fn(context, args) {
    return {
      type: 'render',
      as: 'markdown',
      value: {
        content: 'hello from the server',
      },
    };
  }
};
