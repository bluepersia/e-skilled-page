window.addEventListener('load', () => {
    import('fluid-scale').then((module) => {
      module.default({scrollFix: true, json: 'homepage'}); // if the module exports an `init` function


    });
  });