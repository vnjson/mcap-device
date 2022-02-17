import './style.css'
const tpl  = `<div class="stream__show-frame component">
                    <div class="stream__show-frame__cell"></div>
                    <div class="stream__show-frame__cell"></div>
                    <div class="stream__show-frame__cell"></div>
                    <div class="stream__show-frame__cell"></div>
             </div>`
export default function (){
  let $frame = $(tpl)
  this.$store.$stream.append($frame)
  this.on('frame', param=>{
      if(param){
          $frame.html('')

          for(let i=1; i<5;i++){
              let tplItem = $(`<div class="stream__show-frame__cell ${param[i]?'':'filter-blur'}" style="background-image:url('${this.getAssetByName(param.img).url}') "></div>`)
              $frame.append(tplItem)
          }
          //  $(item).removeClass('filter-blur')
          $frame.css('display', 'flex')
      }
      else{
        $frame.hide()
      }
  })
}