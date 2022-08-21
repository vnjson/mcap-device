(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define([], factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.Vnjson = factory(root);
  }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

'use strict';

class Vnjson {
  version = '1.8.4';
  //current object
  ctx = {};
  //loaded scenes
  TREE = {};

  constructor (conf){
    this.conf = conf;
    this.debug = conf.debug;
    this.on('jump', this.jumpHandler);
    this.on('timeout', this.timeoutHandler);
    this.on('log', (param)=>console.log(param));
  }

  /**
   * Plugins store
   */
  plugins = {};

  current = {
    index: 0,
    labelName: '',
    sceneName: '',
    character: null,
    data: { 
      score: null
    },
    tree: [],
    allAssets: [],
    assets: []
  };

  $store = {};

  getAssetByName (name){
    const asset = this.current.assets.filter(asset=>{
                      return asset.name===name;
                })[0];
    if(asset){ 
      return asset
    }
    else{
      this.emit('error', 'assetNotFound', name);
      return {url: name}
    }
  }
  
  getDataByName (id){
    const scenesBody = Object.values(this.TREE);
    let data = null;
    scenesBody.map(body=>{

      if(body.data){
        if(body.data.hasOwnProperty(id)){
          data = { id, body: decodeURI(atob(body.data[id])) }
        }
      }
    })
    return data;
  }
  isSceneExist (sceneName){
    return this.TREE[sceneName]
  }
  isLabelExist (sceneName, labelName){

    if(this.isSceneExist(sceneName)){
      return this.TREE[sceneName][labelName]
    }
    return false
    
  }
  isRouteExist (pathname){
    const route = pathname.split('.')
    if(route.length===1){
      return this.isSceneExist(this.current.sceneName, route[0])
    }
    if(route.length>1){
      return this.isLabelExist (route[0], route[1])
    }
  }
  getCurrentLabelBody (){
 
    try{
      const labelBody = this.TREE[this.current.sceneName][this.current.labelName]
      return labelBody
    }
    catch(err){
      this.emit('error', 'menuOrJumpLeadsNowhere');
      return ['']
    }
 

    
  }
  getCurrentCharacter (){

    return this.current.character;
  }
  getCharacterById (id){
    return this.TREE.$root.characters.find(character=>character.id === id)
  }
  getCharacters (){
    return this.TREE.$root.characters
  }

  getCtx (){
    return this.getCurrentLabelBody()[this.current.index];
  }

  setTree (tree){
    this.TREE = tree;

          if(!this.TREE.$root.hasOwnProperty('characters')){
            let narrator = {
                  id: "$",
                  name: ". . . .",
                  nameColor: "#49de58",
                  replyColor: "#a4deaa"
             }
             if(this.conf.$){
                narrator = this.conf.$
             }
            this.TREE.$root.characters = [narrator]

          }

          this.TREE.$root.characters.map(character => {
            /**
             * Навешиваем слушатель на id персонажа
             * 
             */
            this.on(character.id, (reply) => {
              this.current.character = character;
              this.emit('character', character, reply );
            })

          });

    this.emit('setTree')
    return this;
  }

  on (event, handler){
      if(!this.plugins[event]) {
        this.plugins[event] = [];
      }
      this.plugins[event].push(handler);
      return this;
  }
  emit (event, ...args){
      if(event in this.plugins) {
          this.plugins[event].forEach(handler=>handler.call(this, ...args));
      }
      return this;
  }
  off (event){
    delete this.plugins[event];
    return this;
  }
  
  exec (ctx){
    //Получаем текущий объект контекста
    this.ctx = ctx||this.getCtx();
    if(typeof this.ctx === 'string'){
          this.emit('$', this.ctx);
          this.emit('exec', this.ctx);
    }
    // $: null | $: false
    else if(!this.ctx){
          this.emit('$', String(this.ctx) );
          this.emit('exec', String(this.ctx) );
    }
    else if(typeof this.ctx === 'object'){
          /**
           * Преобразуем объект контекста [this.ctx] в массив 
           * [ ['key', 'value'], ['key2','value2']]
           * Пробегаемся по этому массиву, и записываем 
           * ключ-значение в переменные [ event, data ]
           */
          for(let [event, data] of Object.entries(this.ctx)){
          /**
           * Вызываем плагины с соответсвующими именами ключей
           */
            if(!/^_/i.test(event)){
                this.emit(event, data);
            }
          }
    }
    else{
        this.emit('$', String(this.ctx) );
    }
    this.emit('vnjson:exec', this.ctx)
    return this;
  }

  next (){

    if(this.getCurrentLabelBody().length-2<this.current.index){
  
      this.current.index = this.current.index;
      this.emit('warn', `NoWayOutOfTheLabel`);
    }
    else{
      this.current.index++;
      this.exec();
      this.emit('vnjson:next')
    }
    
    return this;
  };

  use (plugin){
        plugin.call(this);  
        return this;
  }
  /*include plugins*/
  jumpHandler (_pathname){
    let pathname = String(_pathname);
    /**
     * Обработка прыжка по менткам _mark
     */
    if(/^_/i.test(pathname) ){
        const labelBody = this.getCurrentLabelBody();
        if(labelBody.length===0) return;
        const index = labelBody.map( ctx=>{
                                return ctx.hasOwnProperty(pathname)
                              })
                              .indexOf(true);
              
        const label = [ this.current.sceneName, this.current.labelName, index ].join('.');
        
        this.exec({jump: label});
    }
    else{
        const path = pathname.split('.');
        this.current.index = path[2]||0;
        //label
        if(!/\./i.test(pathname)){    
          this.current.labelName = path[0];
          this.emit('init', false);

        }
        //scene.label
        if(/\./i.test(pathname)){
            this.current.sceneName = path[0];
            this.current.labelName = path[1];
            this.emit('init', true);
        };      
    }
  }

  timeoutHandler (param){
    setTimeout(() => this.exec(param.exec), param.timer)
  }
};

return Vnjson;
});
