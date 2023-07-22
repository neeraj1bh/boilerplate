module.exports = {
  // check Typescript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // run tests
  "**/*.(ts|tsx)": () => "yarn test",

  // lint and format TypeScript and JavaScript files
  "**/*.(ts|tsx)": (filenames) => [`yarn eslint --fix ${filenames.join(" ")}`],
};
