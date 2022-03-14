exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat((context, request, callback) => {
        const regex = /^@?firebase(\/)app(\/(.+))?/;
        if (regex.test(request)) {
          return callback(null, `umd ${request}`);
        }
        callback();
      }),
    });
  }
};