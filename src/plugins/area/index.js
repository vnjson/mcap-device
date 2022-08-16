import './style.css';

const $tpl = $('<div class="vnjson__area component"></div>');

export default function (){

  this.$store.$screen.append($tpl)
  this.on('area', handler.bind(this) )
  $tpl.on('click', e => {
      if(!e.target.className.includes('vnjson__area-item')) return;
      const execData = JSON.parse( e.target.dataset.exec);
      this.exec( execData )
  })

}



function handler (regions){

  if(!regions) {
    $tpl.hide();
    return;
  };

  $tpl.empty();
  $tpl.show();
  regions.forEach( (reg, index) => {
      let style = `position:absolute;
                    top:${reg.top}px;
                    left:${reg.left}px;
                    width:${reg.width}px;
                    height:${reg.height}px;`;
      if(reg.show){
        style+='border: 5px solid #11f285;'
      }
      const regTpl = `<div style="${style}" class="vnjson__area-item" data-exec='${JSON.stringify(reg.exec)}'></div>`
      $tpl.append(regTpl)
  })


}

