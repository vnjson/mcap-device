import "./style.css";


const $tpl = $(`<div class="status-bar-push component"></div>`);
let $logo = null;
let openList = false;

export default function (){
    this.store.screen.append($tpl);
    $logo = $('.status-bar__logo-wrapper');
    
    vnjs.on('push', (args) => pushHandler(args))
    $logo.on('click', () => clickHandler())
}




function pushHandler (args){
        vnjs.state.data['pushStore'] = vnjs.state.data['pushStore']||[]
        if(!args){
            vnjs.state['pushStore'] = []
            $tpl.empty()
            $tpl.close()
        }
        else{
            const message = {
                ...args,
                read: false
            }
            vnjs.state.data['pushStore'].push(message)
           
            outputMessages()
            updateStatus()
  
    

        }
        vnjs.emit('data-save', true)
}


function updateStatus(){
    $logo.addClass('status-bar__player-logo--status')
    if(vnjs.package.push){
        vnjs.emit('audio', vnjs.package.push)
    }
    
}

function outputMessages (){
    $tpl.empty();
   const { pushStore } = vnjs.state.data;
   pushStore[0].read = true
   pushStore.forEach( (msg, index) => {
        const $str = $(`<div class="status-bar__push-status">
                            <div class="status-bar-push__icon"></div>
                            <div class="status-bar-push__info">${msg.info}</div>       
                      </div>`)
        const $icon = $str.find('.status-bar-push__icon')
        if(msg.icon){
            const url = vnjs.getAssetByName(msg.icon).url
            $icon.css('background-image', `url(${url})`)
            $icon.show()
        }
        else{
            $icon.hide()
            $icon.css('background-image', `unset`)
        }
        $tpl.append($str)
   })

}

function clickHandler (){
        $logo.removeClass('status-bar__player-logo--status');

        
        if(openList){
            close()
        }
        else{
            if($tpl.html()==="") return;
            open()
            
        }
}

function close (){
    $logo.removeClass('status-bar__push-status--open')
    $tpl.hide();
    openList = false;
};

function open (){
    $logo.addClass('status-bar__push-status--open');
    $tpl.css('display', 'flex');
    openList = true;
    $tpl.animate({ scrollTop: $tpl.height()}, 500);
}

vnjs.on('dialog-box.click', () => close())