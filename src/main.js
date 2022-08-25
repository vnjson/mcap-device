
import './plugins.js'
import './theme.css'


/**
 * Загрузка игры
 */
fetch(`scenes/vn.json?v=${new Date().getTime()}`)
  .then(r => r.json())
  .then(tree => $vnjs.mount(tree))
  .catch(err => {
    $('.debug-error').css('display', 'flex')
                     .find('.debug-error__msg')
                     .html('Невалидный скрипт');

    console.error('Invalid script', err.message);
  });
  

$vnjs.on('postload', function (){
  $vnjs.config = { 
      debug: this.TREE.$root.package?.debug,
      width: 1024,
      height: 768
  }
  // ?jump=scene.label
  // ?jump=scene  //default $init
  const label = new URL( location.href ).searchParams.get("jump")
  if(label){
    const [ sceneName, labelName ] = label.split('.');

    $vnjs.exec({jump: `${sceneName}.${labelName}`})
  }
  else{
    $vnjs.exec({jump: '$root.$init'})
  }
  
});