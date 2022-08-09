class Menu {
    items = []
    onClickObj = null
    constructor ($view, vnjs, config){
        this.$view = $view
        this.__vnjs = vnjs
        this.itemQuetionClassName = config.itemQuetionClassName
        this.itemClassName = config.itemClassName
    }
    setData (param){
        this.$view.empty()
        this.items = param
        this.items.forEach(menuItem => this.createMenuItem(menuItem))
    }
    show (){
        this.$view.show()
    }
    hide (){
        this.$view.hide()
    }
    createMenuItem (menuItem){
        for(let _key in menuItem){
            let key = _key
            /**
             * Определяем есть ли среди параметров меню ID персонажа
             * Если есть, то вопрос от имени персонажа встраиваем в меню
             */
            const character = this.__vnjs.getCharacterById(_key)
            if(character){
                key = 'character'
            }
            const value = menuItem[_key]
            switch (key){
                    case 'disabled':
                        //
                        break
                    case 'character':
                        this.addMenuItemCharacter(character, value)
                        break
                    case 'onClick':
                        //
                        break
                    case 'icon':
                        //
                        break
                    case 'css':
                        //
                        break

                    /**
                     * PATH 
                     */    
                    default:
                        this.addMenuItemPath(key, value)
                        
            }

        }
    }
    addMenuItemCharacter (character, itemText){
        const tpl = `<div class="${this.itemQuetionClassName}">
                            <span style='color:${character.nameColor}; padding-right: 20px;'>${ character.name }:</span>
                            <span style='color:${character.replyColor}; '>${ itemText }</span>
                    </div>`
        this.$view.append(tpl)
    }
    addMenuItemPath (label, itemText){
        const tpl = `<div data-label="${ label }" class="${this.itemClassName}">
                            <span class="sound-click">${ itemText }</span>
                    </div>`;
        this.$view.append(tpl)
    }
  
    disabled (){

    }
    clickItemHundler (label){
        
   
        alert(label)
    }

}

export default Menu