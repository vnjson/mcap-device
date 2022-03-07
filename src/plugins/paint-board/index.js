import './style.css'

export default function (){

this.on('setTree', ()=>{
    if(this.TREE.$root.package['paint-board']){
      init()
    }

})

var init = ()=>{

    const $tpl = $('<iframe id="paint-board__vnjson" src="data/paint-board/index.html" width="800" height="500"></iframe>');
    this.$store.$stream.append($tpl);  
    this.on('paint-board', imgID=>{
        if(imgID){
              $tpl.show();
              let url = this.getAssetByName(imgID).url.split('');
              url.shift();
              let IMG = location.protocol+'//'+location.host+url.join('');
              let win = document.querySelector("iframe#paint-board__vnjson").contentWindow;
              win.postMessage({ IMG }, location.origin+"/data/paint-board/index.html");
        }
        else{
          $tpl.fadeOut();
        }
    })

}



}