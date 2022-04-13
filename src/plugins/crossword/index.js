import './style.css';


export default function (){


this.on('setTree', ()=>{
    if(this.TREE.$root.package['crossword']){
      init();
    }

})
let $tpl = null;
const init = ()=>{


    this.on('crossword', data=>{
        if($tpl){
          $tpl.remove();
          $tpl = null;
        }
        if(data){
            $tpl = $('<iframe id="crossword" src="data/crossword/index.html" width="975" height="500"></iframe>');
            this.$store.$screen.append($tpl);
            setTimeout(()=>{
                $tpl.show();
                let win = document.querySelector("iframe#crossword").contentWindow;
                win.postMessage(data, location.origin+"/data/crossword/index.html");
            }, 300)
        }
        else{
          $tpl.remove();
          $tpl = null;
        }
    });

}

}