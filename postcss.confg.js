import cssnano from 'cssnano';

export default {
  plugins: [
    cssnano({
      preset: ['default', {
        mergeLonghand: true,
        discardEmpty: false,  // keep empty rules/media queries
        // mergeRules is enabled by default in 'default' preset
      }]
    })
  ]
};