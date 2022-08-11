export default function (asset) {
    const _vnjs = this
    const char = this.getCharacters()[0]
    if(asset) {
        const img = new Image()
        img.onload = function () {
          _vnjs.exec({
            [ char.id ]: `<font color="orange">${this.width}</font> x <font color="orange">${this.height}</font>`
          })
        }
        img.src = this.getAssetByName(asset).url
    }
    else{
        _vnjs.exec({
          [ char.id ]: `<font color="brown">Трубуется индификатор изображения</font>`
        })
    }

}