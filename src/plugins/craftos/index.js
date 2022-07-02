
import "./style.css";
const $tpl = $('<div class="vnjson__craftos component"></div>');
let open = false;

export default function (){

  this.$store.$screen.append($tpl);
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

  constructor (){
    this.files = [];
    this.currentFile = {
        attrs: {
          creation: null,
          modification: null
        }
    };
    this.readStore();
  }

  readStore (){
    let files = localStorage.getItem('computer[0].files[].children');
    if(files){
      this.files = JSON.parse(files);
    }
  }
  getKeys (name){
    return {
      attrs: `computer[0].files[${name}].attributes`,
      body: `computer[0].files[${name}].b64`
    }
  }

  readFile (name){
      if(this.fileExist(name)){
          let attrs = localStorage.getItem(this.getKeys(name).attrs);
          let body_b64 = localStorage.getItem(this.getKeys(name).body);
          let body = atob(body_b64);

          this.currentFile = {
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
    if(this.fileExist(name)) return;
    this.files.push(name);
    this.createFile(name, body, false);
 
  }
  updateFile (name, body){
    if(!this.fileExist(name)) return;
    this.createFile(name, body, true);
    
  }
  appendChunk(name, _body){
    if( !this.fileExist(name) ) return;
    let oldBody = this.readFile(name);
    if(oldBody.includes(_body)) return;

    let body = [ oldBody,  _body].join('\n');
    
    this.createFile(name, body, true);

  }
  createFile(name, body, isExist){
      localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files))
      this.currentFile.body = btoa(body);
      this.currentFile.attrs.modification = new Date().getTime();
      if(!isExist){
        this.currentFile.attrs.creation = this.currentFile.attrs.modification;
      }
      localStorage.setItem(this.getKeys(name).attrs,  JSON.stringify(this.currentFile.attrs) );
      localStorage.setItem(this.getKeys(name).body,  this.currentFile.body);
  }
  removeFile (name){
    this.files = this.files.filter(file=>file!==name);
    localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files));
    localStorage.removeItem(this.getKeys(name).attrs);
    localStorage.removeItem(this.getKeys(name).body);
  }
  removeAllFiles (){
      localStorage.removeItem('computer[0].files[].children');
      this.files.forEach(name=>{
        localStorage.removeItem(this.getKeys(name).attrs);
        localStorage.removeItem(this.getKeys(name).body);
      })
  }
}


function fileManager(param){
  const fs = new FileSystem();
  const key = Object.keys(param)[0];
  // Если существует файл с именем которое передали в param[key].body
  // То данные для вставки беруться из него
  let dataFile;
  if(typeof param[key]==='object'){
      dataFile = $vnjs.getDataByName(param[key].body);
  }
  let body;
  if(dataFile){
     body = dataFile.body;
  }
  else{
     body = param[key].body;
  }


  switch (key){
    case 'create':
            fs.writeFile(param[key].name, body);
            break;
    case 'update':
            fs.updateFile(param[key].name, body);
            break;
    case 'append':
            fs.appendChunk(param[key].name, body);
            break;
    case 'remove':
            fs.removeFile(param[key]);
            close();
            break;
    case 'removeAll':
            fs.removeAllFiles();
            close();
            break;
    default:
        console.error('Uknown parameter');
        console.warn($vnjs.current.sceneName+'.'+$vnjs.current.labelName+'.'+$vnjs.current.index);
  }
}
