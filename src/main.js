
import plugins from './plugins.js'
import './theme.css'

/**
 * Загрузка игры
 */
fetch(`scenes/vn.json`)
  .then(r=>r.json())
  .then(tree=>init(tree))
  .catch(err=>console.error('Invalid script', err.message))

function init (tree){
  let debug = false
  if(tree.$root.hasOwnProperty('package')){
    debug = tree.$root.package.debug||false
  }
  /*
    conf: {
      debug: true,
      $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
    }
   */
  window.$vnjs = new Vnjson({ debug: debug })

  plugins.call($vnjs)

  $vnjs.setTree(tree)

  $vnjs.on('postload', ()=>{
      $vnjs.exec({screen: 'stream'})
      // ?jump=scene.label
      // ?jump=scene  //default $init
      const label = new URL( location.href ).searchParams.get("jump")
      if(label){
        label.includes('.')? $vnjs.exec({jump:  label}):$vnjs.exec({jump:  label+'.$init'})
      }
      else{
          $vnjs.exec({jump: '$root.$init'})
      }
  })
  $vnjs.on('init', ()=>{
    $vnjs.exec()
  })
}

