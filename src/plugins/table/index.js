import "./style.css";


export default function (){
  const $table = $('<div class="vnjson__table component"></div>')
  this.$store.$screen.append($table)
  $table.on('click', '.table__cell', function(){
      const label = $(this).data('jump')
      if(label){
        
          $vnjs.exec({'jump': label})
      }
     
  })
  this.on('table', tableData => {

     if(tableData){
        $table.html('')
        $table.css('display', 'flex');
        let border = tableData.filter(item => item.hasOwnProperty('border'))[0]
        let rows = tableData.filter(item => item.hasOwnProperty('row'))
        rows.map(item => {
            let $row = $(`<div class="table-row"></div>`)
            let height = 30 
            item.row.map(cell => {
                let TYPE = null
                let $tpl = null
                // HEIGHT
                if(cell.hasOwnProperty('height') ){
                    height = cell.height
                }
                // IMAGE
                if(cell.hasOwnProperty('image') ){
                      TYPE = 'image'
                      if(cell.image.hasOwnProperty('jump')){
                          $tpl = $(`<div class="table__img-wrapper"><img class="table__cell" style="width: ${cell.image.width}px" data-jump="${cell.image.jump}" src="${this.getAssetByName(cell.image.name).url}"/></div>`)
                      }
                      else{
                          $tpl = $(`<div class="table__img-wrapper"><img class="table__cell" style="width: ${cell.image.width}px"  src="${this.getAssetByName(cell.image.name).url}"/></div>`)
                      }
  
                }
                // TEXT
                if(cell.hasOwnProperty('text') ){
                      TYPE = 'text'
                      if(cell.text.hasOwnProperty('jump')){
                            $tpl = $(`<span class="table__cell table__cell-text" data-jump="${cell.text.jump}" style="width: ${cell.text.width||''}px; font-size: ${cell.text.size}px;">${cell.text.content||''}</span>`)
                      }
                      else{
                            $tpl = $(`<span class="table__cell table__cell-text" style="width: ${cell.text.width||''}px; font-size: ${cell.text.size}px;">${cell.text.content||''}</span>`)
                      }  
                      if(cell.text['background-color']){
                            $tpl.css('background-color', cell.text['background-color'])
                      }
                      if(cell.text['text-color']){
                            $tpl.css('color', cell.text['text-color'])
                      }
                      /**
                       * ALIGN
                       */
                      if(cell.text['align-h']){
                            switch(cell.text['align-h']){
                                case 'left':
                                    $tpl.css('justify-content', 'flex-start')
                                    break
                                case 'center':
                                    $tpl.css('justify-content', 'center')
                                    break
                                case 'right':
                                    $tpl.css('justify-content', 'flex-end')
                                    break
                            }
                      }
                      if(cell.text['align-v']){
                        switch(cell.text['align-v']){
                            case 'top':
                                $tpl.css('align-items', 'flex-start')
                                break
                            case 'center':
                                $tpl.css('align-items', 'center')
                                break
                            case 'bottom':
                                $tpl.css('align-items', 'flex-end')
                                break
                        }
                    }
                }
                $row.append($tpl)
                /**
                 * border
                 */
                if(!cell[TYPE]) return
                if(cell[TYPE]?.border===true){
                    $tpl.css('border-color', 'white')
                }
                else if(typeof cell[TYPE]?.border==='string'){
                    $tpl.css('border-color', cell[TYPE].border)
                }
                else{
                    $tpl.css('border-color', 'transparent')
                }

               
            
            })
            $row.css('height', height)
            $table.append($row)

   
        })
     }
     else{
        $table.html('')
        $table.hide();
     }
  })

}