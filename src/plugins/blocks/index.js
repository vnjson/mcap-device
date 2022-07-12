import './style.css'

export default  function () {
  const $tpl = $('<div class="vnjson__blocks component"></div>')
  this.$store.$screen.append($tpl)
  this.on('blocks', param => {
    if(param){
          $tpl.show()
          param.forEach( item => {
              const imageURL = this.getAssetByName(item.image).url

              const $imgWrapper = $(`<div class="vnjson__blocks-item component"><img alt=""  src="${imageURL}"></div>`)
              
            
              $imgWrapper.css({
                width: item.width,
                height: item.height,
                left: item.left,
                top: item.top,
                display: 'block'
              })
              
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

              setTimeout( ()=>{
                  switch (item.animation.type){
                      case 'slideUp':
                          $img.css({top: '100%', display: 'block'})
                          $img.animate({ top: "0%", opacity: 1 }, item.animation.duration, ()=>{
                              if(item.animation.onEnd){
                                  this.exec(item.animation.onEnd)
                              }
                          } )
                          break
                      case 'slideDown':
                          $img.css({top: '-100%', display: 'block'})
                          $img.animate({ top: "0%", opacity: 1 }, item.animation.duration, ()=>{
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

              }, item.timeout + 500)
          })
    }
    else{
          $tpl.hide()
          $tpl.empty()
    }
  })
}