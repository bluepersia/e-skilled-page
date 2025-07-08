window.addEventListener('load', () => {
    import('fluid-scale').then((module) => {
      module.default({json: 'homepage'}); // if the module exports an `init` function


    });
  });
import {setInlineStyle, type InlineStyle} from 'fluid-scale';

let activeInline:InlineStyle | null= null;

function applyInlineTest ()
{
setTimeout (() => {
  const title = document.querySelector ('[data-title]');
  
  if(title)
  {
   // title.classList.add (title.classList[0] + '--light');
    //title.dataset.test = 'test';
    activeInline = setInlineStyle (title, {
      'font-size': '4.5rem',
      'color': 'aqua'
    })
  }

  setTimeout (() => {
    if (title)
    {
      //title.classList.remove (title.classList[0] + '--light');
      //title.dataset.test = '';
     if(activeInline)
        activeInline.undo ();

     applyInlineTest ();
    }
  }, 2000)
}, 2000)

}