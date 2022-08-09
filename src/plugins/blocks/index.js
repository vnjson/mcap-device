import './style.css'
const $tpl = $('<div class="vnjson__blocks component"></div>')
let stepsArray = []
export default  function () {

  this.$store.$screen.append($tpl)
  this.on('blocks', (param) => {
    stepsArray = param
    blocksHandler.call(this, stepsArray)
  })
  this.on('blocks-step', blocksStepHandler)
}

function blocksHandler (param){
    if(param){
          $tpl.show()
          param.forEach( item => {
              const imageURL = this.getAssetByName(item.image).url
              const $imgWrapper = $(`<div class="vnjson__blocks-item component vnjson__blocks--${item.id}" ><img alt=""  src="${imageURL}"></div>`)
              
              $imgWrapper.css({
                width: item.width,
                height: item.height,
                left: item.left,
                top: item.top,
                display: 'block'
              })
              if(item['z-index']){
                $imgWrapper.css('z-index', item['z-index'])
              }
              const $img = $imgWrapper.find('img')
              $img.css({
                  display: 'none',
                  width: item.width,
                  height: item.height,
                  left: 0,
                  top: 0,
                  opacity: 0
              })
              $tpl.append($imgWrapper)
              /**
               * item.animation
               */
              if(item.animation){
                    setTimeout( ()=>{
                        animationType.call(this, $imgWrapper, $img, item)
                    }, item.timeout + 100)
              }
              else{
               
                $img.css({ opacity: '1', display: 'block'})
              }

          })
    }
    else{
          $tpl.hide()
          $tpl.empty()
    }
}



function animationType ($imgWrapper, $img, item){
    switch (item.animation.type){
        case 'slideUp':
            $img.css({top: '100%', display: 'block'})
            $img.animate({ top: "0%", opacity: 1 }, item.animation.duration, () => {
                if(item.animation.onEnd){
                    this.exec(item.animation.onEnd)
                }
            })
            break
        case 'slideDown':
            $img.css({top: '-100%', display: 'block'})
            $img.animate({ top: "0%", opacity: 1 }, item.animation.duration, () => {
                if(item.animation.onEnd){
                    this.exec(item.animation.onEnd)
                }
            } )
            break
        case 'slideLeft':
            $img.css({left: '-100%', display: 'block'})
            $img.animate({ left: "0%", opacity: 1 }, item.animation.duration, ()=>{
                if(item.animation.onEnd){
                    this.exec(item.animation.onEnd)
                }
            } )
            break
        case 'slideRight':
            $img.css({left: '100%', display: 'block'})
            $img.animate({ left: "0%", opacity: 1 }, item.animation.duration, ()=>{
                if(item.animation.onEnd){
                    this.exec(item.animation.onEnd)
                }
            } )
            break
        case 'moveTo':
            $img.css({ display: 'block', opacity: 1})
            const animationData = {}
            if(item.animation.left){
              animationData.left = item.animation.left
            }
            if(item.animation.top){
              animationData.top = item.animation.top
            }
            $imgWrapper.animate(animationData, item.animation.duration, ()=>{
                if(item.animation.onEnd){
                    this.exec(item.animation.onEnd)
                }
            } )
            break
        case 'zoom':
            $img.css({ display: 'block', opacity: 1})

            const animationData2 = {
                    transform: `scale(${item.animation.value})`,
                    transition: `${item.animation.duration/1000}s`
            }

            $imgWrapper.css(animationData2)
            if(item.animation.onEnd){
                setTimeout(()=>{
                  this.exec(item.animation.onEnd)
                }, item.animation.duration)
            }
            break
        case 'fadeIn':
            $img.css({ display: 'block'})
            $img.animate({  opacity: 1 }, item.animation.duration, ()=>{
                if(item.animation.onEnd){
                    this.exec(item.animation.onEnd)
                }
            } )
            break
        case 'fadeOut':
            $img.css({  opacity: 1, display: 'block'})
            $img.animate({  opacity: 0 }, item.animation.duration, ()=>{
                if(item.animation.onEnd){
                    this.exec(item.animation.onEnd)
                }
            } )
            break
        default:
            this.exec({'$': `<font color="red">Неверный тип анимации ${JSON.stringify( item.animation.type )}</font>`})

    }
}


function blocksStepHandler (item){

    const $imgWrapper = $(`.vnjson__blocks--${item.id}`)
    const $img = $imgWrapper.find('img')
    if(item.image){
        $img.attr('src',   this.getAssetByName(item.image).url )
    }
    
    if(item['z-index']){
        $imgWrapper.css('z-index', item['z-index'])
    }
    if(item.animation){
        animationType ($imgWrapper, $img, item)
    }
    else{
        $img.css({ opacity: '1', display: 'block'})
    }

}