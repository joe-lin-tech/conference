// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /firebase/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({
    externals: getConfig().externals.concat(function(context, request, callback) {
      const regex = /^@?firebase(\/(.+))?/;
      if (regex.test(request)) {
        return callback(null, `umd ${request}`);
      }
      callback();
    }),
  });
};