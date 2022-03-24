import "./style.css";
const $tpl = $('<div class="stream__brython component"></div>');

export default function (){
  this.$store.$stream.append($tpl);
  this.on('python', param=>{
      if(param){
        showTerminal();
      }
      else{
        $tpl.hide();
      }

  })


}

function showTerminal (){

    $tpl.empty();
    const $iframe = $('<iframe src="data/brython/index.html" width="758" height="430"></iframe>')
    $tpl.append($iframe);
    $tpl.show();

}