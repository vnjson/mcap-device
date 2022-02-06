import "./style.css";

export default function (){

  let $left = $('<img alt="" src="" class="stream__show-auto-left component"/>')
  let $center = $('<img alt="" src="" class="stream__show-auto-center component"/>')
  let $right = $('<img alt="" src="" class="stream__show-auto-right component"/>')


  this.$store.$stream.append($left)
  this.$store.$stream.append($center)
  this.$store.$stream.append($right)
/*


 */
  this.on('leftimg', id=>{
    if(id){
        $left.hide()
        if(typeof id==='object'){
          $left.attr('src', this.getAssetByName(id.name).url)
          $left.css(id.css)
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
  this.on('centerimg', id=>{

    if(id){
        $center.hide()
        if(typeof id==='object'){
          $center.attr('src', this.getAssetByName(id.name).url)
          $center.css(id.css)
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
  this.on('rightimg', id=>{
    if(id){
        $right.hide()
        if(typeof id==='object'){
          $right.attr('src', this.getAssetByName(id.name).url)
          $right.css(id.css)
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