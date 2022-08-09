import Menu from './Menu.js'
import "./style.css";
import tpl from "./tpl.html";

const $tpl = $(tpl);


export default function (){
    const config = {
        itemQuetionClassName: 'vnjson__menu-quetion',
        itemClassName: 'vnjson__menu-item'
    }
    const menu = new Menu($tpl, this, config)
    /**
     * Навешиваем click на пункты меню
     */
    $tpl.on("click", ".vnjson__menu-item", function (){
        let label = $(this).data('label')
        menu.clickItemHundler(label)
    })
    this.$store.$screen.append($tpl)
    /**
     * Храним предыдущее значение меню. Это нужно для того,
     * если пользователь захочет скрыть меню menu: false 
     * А после снова отобразить, то же меню menu: true
     */
    let prevParam = null
    /**
     * @event
     */
    this.on('menu', (param) => {
        if(param===true){
            menu.setData(prevParam)
            menu.show()
        }
        else if(param){
            prevParam = param
            menu.setData(param)
            menu.show()
        }
        else{
            menu.hide()
        }

    })

}
