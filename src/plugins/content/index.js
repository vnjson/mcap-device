import './style.css'
import icoContent from './assets/icoContent.jpg'

const $tpl = $(`<ul class="vnjson__stage component"></ul>`)
export default function (){

  this.$store.$screen.append($tpl)

  this.on('content', data=>{
    if( typeof(data)==='string' ){
      console.log('hide: ', data)
    }
    else if ( typeof(data)==='object' ){
      renderTree.call(this, data)
    } 
    else{
      $tpl.hide();
    }
  })


  $('.vnjson__hands').on('mouseover', '.vnjson__hand-right', function (){
    $(this).css('opacity', 0.5)
  })
  $('.vnjson__hands').on('mouseout', '.vnjson__hand-right', function (){
    $(this).css('opacity', 1)
  })


  $('.vnjson__hand-right').css('background-image', `url(${icoContent})`)
  $('.vnjson__hands').on('click', '.vnjson__hand-right', e=>{
          if(this.TREE[this.current.sceneName].content){
              this.exec({ jump: `${this.current.sceneName}.content` })
          }
          else if(this.TREE.$root.content){
              this.exec({ jump: `$root.content` })
          }
          else{
            console.warn('Scene: { ' +'$root.content'+ ' } not found')
          }

  })


}



function renderTree(data){
  const $vnjs = this;

  $tpl.empty()
  $tpl.fadeIn()

  data.map(item=>{
    var $parent = $(`<li class="stage-parent"><div class="stage-vol stage-item sound-hover"></div><ul class="stage-children"></ul></li>`)
    Object.keys(item).map( (key, i)=>{
      
       if(i===0){
        $parent.find('.stage-vol').html(item[key]).attr('data-label', key)

        if(/disabled/i.test(key)){
          $parent.addClass('disabled')
        }
       }
       else{
        let $str = $(`<li class="stage-child stage-item sound-hover" data-label="${key}">${item[key]}<li>`)
   
        if(/disabled/i.test(key)){
          $str.addClass('disabled')
        }
        $parent.find('ul').append($str)
       }

    })
    $tpl.append($parent)
    
  })
function clickHandler(){
    let label = $(this).data('label')
    $tpl.hide()   
    if(label==='next'){
        $vnjs.exec({ next: true })
    }
    else{
        $vnjs.exec({ jump: label })
    }

    $tpl.off('click', clickHandler)
}
$tpl.on('click', '.stage-item', clickHandler)



}