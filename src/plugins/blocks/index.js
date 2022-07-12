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