import "./style.css";


const $tpl = $('<div class="status-bar-push component"></div>');
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
        if(args){
            const message = {
                ...args,
                read: false
            }
            vnjs.state.data['pushStore'].push(message)
            outputMessages()
            updateStatus()
        }
        else{
            vnjs.state['pushStore'] = []
        }
        vnjs.emit('data-save', true)
}


function updateStatus(){
    $logo.addClass('status-bar__player-logo--status')
}

function outputMessages (){
    $tpl.empty();
   const { pushStore } = vnjs.state.data;
   pushStore[0].read = true
   pushStore.forEach( (msg, index) => {
        const $str = $(`<p class="status-bar__status">${msg.info}</p>`)
        $tpl.append($str)
   })

}

function clickHandler (){
        $logo.removeClass('status-bar__player-logo--status')
        if(openList){
            close()
        }
        else{
            open()
        }
}

function close (){
    $logo.removeClass('status-bar__status--open')
    $tpl.hide();
    openList = false;
};

function open (){
    $logo.addClass('status-bar__status--open');
    $tpl.show();
    openList = true;
}