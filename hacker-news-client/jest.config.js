module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transform JS/JSX files using babel-jest
    },
    testEnvironment: "jsdom", // Use jsdom for testing React components
    moduleFileExtensions: ["js", "jsx"],
    transformIgnorePatterns: ["/node_modules/(?!axios)"], // Transform axios
  };
  