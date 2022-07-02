import "./style.css";
import tpl from "./tpl.html"
import  { Score } from './default-score.js'



function clearData(){

  if(this.current.data.score){
      this.current.data.score = new Score();
      store.set(this.TREE.$root.package.ISBN, this.current.data)
      this.emit('setScore')
  }

}

export default function (){
  if(!this.current.data.score){
    this.current.data.score = new Score()

  }

  var $tpl = $(tpl)
  this.$store.$screen.append($tpl)


  var setScore = data=>{

    for(let key in data){
        for(let param in data[key]){
          this.current.data.score[key][param] += data[key][param]
        }
    }
     store.set(this.TREE.$root.package.ISBN, this.current.data)


    this.emit('setScore')
  }

  this.on('оценка', (data)=>{
    if(data==='reset'){
      clearData.call(this)
      this.current.data.score = new Score()
    }
    else{
      setScore(data)
    }
  })

  var qaHandler=data=>{
    $tpl.empty();
 

    for(var [ label, menuItem ] of Object.entries(data)){
      var str = null
      var character = this.getCharacterById(label)
      if(character){
        str = `
          <div class="vnjson__qa--item vnjson__qa--quetion">
              <span class="vnjson__qa--name" style="color: ${character.nameColor};">${ character.name }</span>
              <span class="vnjson__qa--reply" style="color: ${character.replyColor};">${ menuItem }</span>
          </div>`;
        $('.vnjson__qa').append(str)
      }
      else{
        str = `<div class="vnjson__qa--item" data-score=${JSON.stringify(menuItem)}><span class="sound-hover">${ label }</span></div>`;
        $('.vnjson__qa').append(str) 
      }
    }
    $tpl.css('display', 'flex'); 
  let $vnjs = this

  function clickHundler(){
      let data = $(this).data('score')

      setScore(data)

      $('.vnjson__qa').off( "click", clickHundler)
      $('.vnjson__qa').hide();
      $vnjs.exec({ next: true })
  }

  $(".vnjson__qa").on("click", ".vnjson__qa--item", clickHundler);

  }
  this.on('qa', data=>{
    if(data==='reset'){
      clearData.call(this)

    }
    else if(data){
      
      qaHandler(data)
    }
    else{
      $(".vnjson__qa").hide()
    }
  })



}

