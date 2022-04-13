import "./style.css";

let $tpl = $('<ul class="stream__wiki component"></ul>')


export default function (){
  this.$store.$screen.append($tpl)
  this.on('wiki', data=>{
      if(data){
            $tpl.html('');
            $tpl.fadeIn();
            let list;
            if(Array.isArray(data)){
              list = data;
            }
            else{
              list = data.list
              $tpl.css(data.css);
            }
            appendElements.call(this, list)

      }
      else{
          $tpl.fadeOut();
      }
  
 
  })

}


function appendElements (list){
  let wikiStore = this.TREE.$root.wiki
  list.forEach(key=>{
      let str;
      if(typeof wikiStore[key]==='object'){
          str = `<li><span class="stream__wiki-key" style="color: ${wikiStore[key].color}">${key}</span> <span class="stream__wiki-dash">-</span> <span class="stream__wiki-value">${wikiStore[key].text}</span></li>`
      }
      else{
          str = `<li><span class="stream__wiki-key">${key}</span> <span class="stream__wiki-dash">-</span> <span class="stream__wiki-value">${wikiStore[key]}</span></li>`
      }
      
      $tpl.append(str);
  })

}