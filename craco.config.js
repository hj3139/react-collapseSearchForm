module.exports = {
  plugins: [
    {
      plugin: require("craco-antd"),
      options: {
        customizeTheme: {
          "@primary-color": "#797b9e",
          "@text-color": "#131313",
          "@font-family": "IBMPlexSansKr",
          "@btn-shadow": "none",
          "@wave-animation-width": "0px",
        },
      },
    },
  ],
};
