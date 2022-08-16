const routeError = {
    en: `Plugin  <font color="deepskyblue">content</font> leads nowhere`,
    ru: `Некоректные параметры плагина <font color="deepskyblue">content</font>. Маршрут не найден`
}

class Content {
    open = false
    data = null
    constructor (vnjs, $view){
        this.__vnjs = vnjs
        this.$view = $view
    }
    getData (){
        const { sceneName } = this.__vnjs.current
        const currentContent = this.__vnjs.TREE[sceneName].content
        if(currentContent){
            return currentContent
        }
        const globalontent = this.__vnjs.TREE.$root.content
        if(globalontent){
            return globalontent
        }
        else{
            this.__vnjs.emit('error', {
                en: `File <font color="cyan">$root/content.yaml</font> is missing`,
                ru: `Файл <font color="cyan">$root/content.yaml</font> отсутсвует`
            })
        }
 
    }
    reset (){
        this.$view.empty()
    }
    show (){     
        this.$view.show()
        this.open = true
    }
    hide (){
        this.$view.hide()
        this.open = false
    }
    render (){
        this.reset()
        this.data = this.getData()
     
        this.data.forEach( (item, parentIndex) => {
            const $parent = $(`<li class="stage-parent state-parent-${ parentIndex}"><div class="stage-vol stage-item"></div><ul class="stage-children"></ul></li>`)
            /**
             * disabled
             */
            if(item.disabled){

                if(typeof item.disabled ==='string'){
                        const [ key, value ] = item.disabled.split('===')
          
                        const k = String( this.__vnjs.current.data[key] ).trim()
                        const v = String(value).trim()

                        if( k === v ){
                            $parent.addClass('disabled')
                        }
                        else{
                            // defalut
                        }
                }
                else{
                    $parent.addClass('disabled')
                }
                
                //$parent.find('.stage-children').hide()
            }
            /**
             * children
             */
            if(item.children){
                    item.children.forEach( (child, childIndex) => {
                        const $str = $(`<li class="stage-child stage-child-${childIndex} stage-item"><li>`)
                        if(child.disabled){
                            $str.addClass('disabled')
                        }
                        /*
                        * children route
                        */
                        const childRoute = Object.keys(child).filter( obj => {
                            if(obj!=='disabled'&&obj!=='children') return true
                        })
                        $str.attr('data-label', childRoute).html(child[childRoute])
                        $parent.find('ul').append($str)
                    })
            }
            /**
             * route
             */
            const parentRoute = Object.keys(item).filter( obj => {
                if(obj!=='disabled'&&obj!=='children') return true
            })

            $parent.find('.stage-vol.stage-item').attr('data-label', parentRoute).html(item[parentRoute])
           
            this.$view.append($parent)

        })
    }
    /**
     * disabled = !disabled
     */
    switchItem (data){
        const level = String(data.item).split(' ')


        if(level.length===1){
            this.__vnjs.TREE.$root.content[level[0]].disabled = data.disabled
        }
        if(level.length===2){
            this.__vnjs.TREE.$root.content[level[0]].children[level[1]].disabled = data.disabled
        }
        /**
         * addClass / removeClass
         * disabled
         */
        /*
        const $p = $(`.state-parent-${ level_1}`)
        const $ch = $(`.stage-child-${level_2}`)
        if(data.disabled){
            $p.removeClass('disabled')
            $ch.removeClass('disabled')
        }
        else{
            $p.addClass('disabled')
            $ch.addClass('disabled')
        }*/
        
    }

    selectItem (label) {
    
        if(!this.__vnjs.isRouteExist(label)){
            this.__vnjs.emit('error', routeError)
            return
        }
        else{
            this.hide()
            this.__vnjs.exec({jump: label })
        }
    }
}


export default Content