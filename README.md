# canvas-plugin-boilerplate

A boilerplate for canvas plugins

# Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start` : Start kibana and have it include this plugin
  - `npm start -- --config kibana.yml` : You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`
  - `npm run build` : Build a distributable archive
  - `npm run test:browser` : Run the browser tests in a real web browser
  - `npm run test:server` : Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.

# Concepts

## Registries

Canvas is extended the same way Kibana is, by exposing various registries that plugins use to add functionality. There are two types of registries, client registries and server registries. The former is for the browser runtime, and the later is for the node runtime.

Public items need to registered when the application starts. This is most easily done by using a "hack", which will get executed when the application is loaded in the browser. You can see how this works in `public/lib/load_plugins.js`, which registered some public functions and provides a reference for other available registries.

Server items are intialized as part of the Kibana plugin lifecycle. Consult the `init` section in the top level `index.js` file to see how this works. You'll see that Canvas exposes some registration functions for the server registries. Some server functions are registered in this boilerplate, and you'll also find references to other available registries.