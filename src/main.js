
import plugins from './plugins.js'
import './theme.css'


/**
 * Загрузка игры
 */
fetch(`scenes/vn.json?v=${new Date().getTime()}`)
  .then(r=>r.json())
  .then(tree=>init(tree))
  .catch(err=>{
    $('.debug-error').css('display', 'flex')
                     .find('.debug-error__msg')
                     .html('Невалидный скрипт');

    console.error('Invalid script', err.message);
  });

function init (tree){

  /*
    conf: {
      debug: true,
      $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
    }
   */

  window.$vnjs = new Vnjson({ debug: tree.$root.package?.debug });
  
  plugins.call($vnjs);
  $vnjs.setTree(tree);
 
  $vnjs.on('postload', function (){

      // ?jump=scene.label
      // ?jump=scene  //default $init
      const label = new URL( location.href ).searchParams.get("jump")
      if(label){
        const [ sceneName, labelName, index ] = label.split('.');

        $vnjs.exec({jump: `${sceneName}.${labelName}`})
      }
      else{
        $vnjs.exec({jump: '$root.$init'})
      }
      
  });
  $vnjs.on('init', ()=>{
    $vnjs.exec();
  })
}
