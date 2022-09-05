import "./style.css";


const $tpl = $(`<div class="status-bar-push component"></div>`);
let $logo = null;
let openList = false;
let _args = null;

export default function (){
    this.store.screen.append($tpl);
    $logo = $('.status-bar__logo-wrapper');
    
    vnjs.on('push', (args) => pushHandler(args));
    $logo.on('click', () => clickHandler());
}




function pushHandler (args){
        _args = args;
        vnjs.state.data['pushStore'] = vnjs.state.data['pushStore']||[];
        if(!args){
            vnjs.state['pushStore'] = [];
            $tpl.empty();
            $tpl.close();
        }
        else{
            const message = {
                ...args
            }
            /**
             * Проверяю существует ли запись с таким id
             */
            setTimeout(() => {
                outputMessages();
            },100)
            const itemExist = vnjs.state.data['pushStore'].find((item) => item.id===_args.id);
            if(itemExist) return;
            vnjs.state.data['pushStore'].push(message);
           
            
            updateStatus();
        }
        vnjs.emit('data-save', true)
}


function updateStatus(){
    $logo.addClass('status-bar__player-logo--status');
    if(vnjs.package.push){
        vnjs.emit('audio', vnjs.package.push);
    }
    
}

function outputMessages (){
   $tpl.empty();
   const  pushStore  = vnjs.state.data.pushStore.sort(function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    }).reverse();

    /**
     * Перебираем массив с записями
     */
    pushStore.forEach( (msg, index) => {
        const $str = $(`<div class="status-bar__push-status">
                            <div class="status-bar-push__icon"></div>
                            <div class="status-bar-push__info">${msg.info}</div>       
                      </div>`);
        const $icon = $str.find('.status-bar-push__icon');
        if(msg.icon){
            const url = vnjs.getAssetByName(msg.icon).url;
            if(url){
                $icon.css('background-image', `url(${url})`);
                $icon.show();
            }
        }
        else{
            $icon.hide();
            $icon.css('background-image', `unset`);
        }
        $tpl.append($str);
    });
};

function clickHandler (){
        $logo.removeClass('status-bar__player-logo--status');
        if(openList){
            close();
        }
        else{
            if($tpl.html()==="") return;
            open();
        }
};

function close (){
    $logo.removeClass('status-bar__push-status--open');
    $tpl.hide();
    openList = false;
};

function open (){
    $logo.addClass('status-bar__push-status--open');
    $tpl.css('display', 'flex');
    openList = true;
    $tpl.animate({ scrollTop: $tpl.height()}, 500);
};

vnjs.on('dialog-box.click', () => close());