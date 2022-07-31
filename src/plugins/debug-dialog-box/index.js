import "./style.css";
import tpl from "./tpl.html"
/** 
 * color picker
 */
import './color-picker/color.css'
import './color-picker/color.js'
let cid = '$'
export default function (){
  
  const $tpl = $(tpl)
  $('.game').append($tpl)

  $('.debug__inner-reply').on('click', () => {
      const cid = $('.debug__character').val()
      const reply = $('.debug__reply').val()
      if(cid==='') cid = '$';

      this.exec({ [cid]: reply })

  })

  $('.debug__mcexec').on('click', () => {
      const action = $('.debug__mc-exec').val()
      const data = $('.debug__mcexec-data').val()
      const checkBoxType = $('.debug__mcexec-type:checked').val()
      let type = 'player'
      if(checkBoxType==='on'){
         type = 'server'
      }
      const plugins = { 
                'mc-exec': {
                    action,
                    data,
                    type
                } 
      }

      this.exec(plugins)
    
  })


/**
- mc-exec:
    action: executeCMD
    data: say TEST TEST TEST # give @p dirt 1
    type: player
 */
    /*
     * delay
     */
    const _this = this 
    this.on('postload', () => {
        const delay = this.TREE.$root.package?.['dialog-box'].delay
        $('.debug__delay').val(delay||0)
        /**
         * init color picker
         */

        setTimeout(()=>{
            $('#debug__color-picker').spectrum({
                color: this.getCurrentCharacter().replyColor
            })
        }, 100)
    }) 
   // _this.TREE.$root.characters[0]
    $('.debug__delay').on('change', function() {
        _this.$store['dialog-box'].delay = $(this).val()
    })
    $('#debug__color-picker').on('change', function() {
        const value = $(this).val()
        _this.$store['dialog-box'].character.replyColor = value
        _this.$store['dialog-box'].update()
        copyTextToClipboard(value);
    })

    this.on('dialog-box:startOutputReply', () => {

        $('#debug__color-picker').spectrum({
            color: this.getCurrentCharacter().replyColor
        })
    })

}

/**
 * clipboard
 */

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
      
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
      
        document.body.removeChild(textArea);
      }
      function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(function() {
          console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        });
      }
      

    