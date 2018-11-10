exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scroll-to/,
            loader: 'null-loader',
          },
        ],
      },
    })
  }
};
