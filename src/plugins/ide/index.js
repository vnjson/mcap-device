import './style.css'
const $tpl = $('<div class="mcap__ide-serpents component"></div>');
export default function (){

  this.on('postload', ()=>{
      if(this.TREE.$root.package['ide']){
        init.call(this);
      }
  })


}
var firstLoad = true;
function init (){
    const $iframe = $('<iframe id="mcap__ide" src="data/ide/index.html" width="600" height="361"></iframe>')
    this.$store.$screen.append($tpl);
    $tpl.append($iframe);
    this.on('ide', data=>{
        if(data){
              $tpl.show();
              const file = this.getDataByName(data);

              const win = document.querySelector("iframe#mcap__ide").contentWindow;
              const url = location.origin+"/data/ide/index.html";
              if(firstLoad){
                setTimeout(()=>{
                  win.postMessage({ file: file?.body||'' }, url);
                }, 1000);
                firstLoad = false;
              }
              else{
                win.postMessage({ file: file?.body||'' }, url);
              }
              


        }
        else{
            $tpl.hide();
        }

    });

}
