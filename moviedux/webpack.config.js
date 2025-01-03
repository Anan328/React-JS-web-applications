module.exports = {
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'), // Ensure path fallback is included
      http: require.resolve('stream-http'),
      net: false,
      querystring: require.resolve('querystring-es3'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify')
    }
  }
};
