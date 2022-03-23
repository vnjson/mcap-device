/**

computer[0].files[].attributes: "{\"modification\":0,\"creation\":0}"
computer[0].files[].children: "[\"text.txt\",\"ttt.js\"]"
computer[0].files[text.txt].attributes: "{\"creation\":1648054957483,\"modification\":1648054957492}"
computer[0].files[text.txt].b64: "Cg=="
computer[0].files[ttt.js].attributes: "{\"creation\":1648055025988,\"modification\":1648055025996}"
computer[0].files[ttt.js].b64: "MTIzNAo="

*/

import "./style.css";
const $tpl = $('<div class="stream__craftos component"></div>');
let open = false;

export default function (){

  this.$store.$stream.append($tpl);
  this.on('craftos', data=>{
      if(typeof data==='object'){
          if(!open){
            showTerminal();
          }
          fileManager(data);
      }
      else if(data===true){
        showTerminal();
      }
      else{
        close();
      }

  });
  
}

function close (){
  open = false;
  $tpl.empty();
  $tpl.hide();
}

function showTerminal (){
    open = true;
    $tpl.empty();
    const $iframe = $('<iframe src="data/craft-os/index.html" width="758" height="430"></iframe>')
    $tpl.append($iframe);
    $tpl.show();
}




class FileSystem {
  files = [];
  #currentFile = {
      attrs: {
        creation: null,
        modification: null
      }
  };
  constructor (){
    this.readStore();
  }
  init (){

  }
  readStore (){
    let files = localStorage.getItem('computer[0].files[].children');
    if(files){
      this.files = JSON.parse(files);
    }
    else{
     // console.error('Files not exist');
    }
  }
  getKeys (name){
    return {
      attrs: `computer[0].files[${name}].attributes`,
      body: `computer[0].files[${name}].b64`
    }
  }

  readFile (_name){
      let name = this.files.find(file=>file===_name);
      if(name){
          let attrs = localStorage.getItem(this.getKeys(name).attrs);
          let body_b64 = localStorage.getItem(this.getKeys(name).body);
          let body = atob(body_b64);

          this.#currentFile = {
            attrs: JSON.parse(attrs), 
            body, 
            name
          }
          return body;
      }

  }
  fileExist (name){
    return this.files.find(file=>file===name);
  }
  writeFile (name, body){
    if(this.fileExist(name)){
        this.readFile(name);
        this.createFile(name, body);
    }
    else{
      this.files.push(name);
      this.createFile(name, body, false);
    }
  }
  createFile(name, body, isExist){
      localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files))
      this.#currentFile.body = btoa(body);
      this.#currentFile.attrs.modification = new Date().getTime();
      if(!isExist){
        this.#currentFile.attrs.creation = this.#currentFile.attrs.modification;
      }
     
      localStorage.setItem(this.getKeys(name).attrs,  JSON.stringify(this.#currentFile.attrs) );
      localStorage.setItem(this.getKeys(name).body,  this.#currentFile.body);
  }
  removeFile (name){
    this.files = this.files.filter(file=>file!==name);
    localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files));
    localStorage.removeItem(this.getKeys(name).attrs);
    localStorage.removeItem(this.getKeys(name).body);
  }
}


function fileManager(param){
  let fs = new FileSystem();

  if(param.set){
        // Если в параметр set ложим существующий файл в папке $root/data
        // то это файл положим в файловую систему CraftOS
        let dataFile = $vnjs.getDataByName(param.set);
        if(dataFile){
            fs.writeFile(param.file, dataFile.body)
        }
        else{
            fs.writeFile(param.file, param.set)
        }
        
  }
  if(param.remove){
        fs.removeFile(param.file)

  }

}
