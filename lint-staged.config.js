const buildEslintCommand = (filenames) => `eslint --fix ${filenames.join(" ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier ${filenames.join(" ")} -w`;

export default {
  "**/*.js": [buildEslintCommand],
  "**/*.{js,md,html,css}": [buildPrettierCommand],
};
