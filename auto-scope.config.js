
export default {
  inputDir: 'src', // Write all your vanilla content here
  outputDir: 'vite', // This is where the converted files will be created
  dontFlatten: false, // Keep compound selectors rather than automatic BEM-style flattening
  useNumbers: true, // Use numbers (1, 2, 3, 4) instead of hash (3d0ccd)
  preserveSuffixes: false, //card-2 will always be card-2
  dontHashFirst: true, // The first scope of a certain type doesn't get an ID or hash
  mergeCss: false, // Merge all the CSS into one file
  teamGit: '', //The git repo of the team/main project (private mode)
  teamSrc: false, // Team src folder/s to scan for class names already used
  copyFiles: true, // Copy rest of files directly to output, as they are
  globalCss: ['global.css', 'utilities.css'], //Css that should not be scoped and only copied as is 
  flattenCombis: [], //Flatten combinators, e.g. > becomes _a_
  overrideConfig: {}, //Override config for specific scopes
};
  