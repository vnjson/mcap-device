import "./style.css";


export default function (){
  let $table = $('<div class="stream__table component"></div>')
  this.$store.$screen.append($table)
  $table.on('click', '.table__cell', function(){
      let label = $(this).data('jump')
      if(label){

          $vnjs.exec({'jump': label})
      }
     
  })
  this.on('table', tableData=>{

     if(tableData){
        $table.html('')
        $table.css('display', 'flex');
        let border = tableData.filter(item=>item.hasOwnProperty('border'))[0]
        let rows = tableData.filter(item=>item.hasOwnProperty('row'))
        rows.map(item=>{
            let $row = $(`<div class="table-row"></div>`)
            let height = 30 
            item.row.map(cell=>{
                if(cell.hasOwnProperty('height') ){
                    height = cell.height
                }
                if(cell.hasOwnProperty('image') ){
                      let tpl = ''
                      if(cell.image.hasOwnProperty('jump')){
                          tpl = `<img class="table__cell" style="width: ${cell.image.width}px" data-jump="${cell.image.jump}" src="${this.getAssetByName(cell.image.name).url}"/>`
                      }
                      else{
                          tpl = `<img class="table__cell" style="width: ${cell.image.width}px"  src="${this.getAssetByName(cell.image.name).url}"/>`
                      }
                      $row.append(tpl)
                }
                if(cell.hasOwnProperty('text') ){
                      let tpl = ''
                      if(cell.text.hasOwnProperty('jump')){
                            tpl = `<span class="table__cell table__cell-text ${border?'row-border':''}"  data-jump="${cell.text.jump}" style="width: ${cell.text.width||''}px; font-size: ${cell.text.size}px">${cell.text.content||''}</span>`
                      }
                      else{
                            tpl = `<span class="table__cell table__cell-text ${border?'row-border':''}"" style="width: ${cell.text.width||''}px; font-size: ${cell.text.size}px">${cell.text.content||''}</span>`
                      }
                  
                  $row.append(tpl)
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