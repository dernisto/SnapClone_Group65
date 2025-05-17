module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transformOptions: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
};