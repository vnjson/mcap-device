import "./style.css";

export default function (){

  let $left = $('<img alt="" src="" class="vnjson__show-auto-left component"/>')
  let $center = $('<img alt="" src="" class="vnjson__show-auto-center component"/>')
  let $right = $('<img alt="" src="" class="vnjson__show-auto-right component"/>')


  this.store.screen.append($left)
  this.store.screen.append($center)
  this.store.screen.append($right)
/*


 */
  vnjs.on('leftimg', id=>{
    if(id){
        $left.hide()
        if(typeof id==='object'){
          $left.attr('src', this.getAssetByName(id.name).url)
          if(id.css){
            $left.css(id.css)
          }
        }
        else{
          $left.attr('src', this.getAssetByName(id).url)
        }
        $left.fadeIn()
    }
    else{
      $left.fadeOut()
    }
  })
  vnjs.on('centerimg', id=>{

    if(id){
        $center.hide()
        if(typeof id==='object'){
          $center.attr('src', this.getAssetByName(id.name).url)
          if(id.css){
            $center.css(id.css)
          }

        }
        else{
          $center.attr('src', this.getAssetByName(id).url)
        }
        $center.fadeIn()
    }
    else{
      $center.fadeOut()
    }
  })
  vnjs.on('rightimg', id=>{
    if(id){
        $right.hide()
        if(typeof id==='object'){
          $right.attr('src', this.getAssetByName(id.name).url)
          if(id.css){
            $right.css(id.css)
          }

        }
        else{
          $right.attr('src', this.getAssetByName(id).url)
        }
        $right.fadeIn()
    }
    else{
      $right.fadeOut()
    }
  })

}