export default function (asset) {
    const _vnjs = this
    const char = this.getCharacters()[0]
    if(asset) {
        const img = new Image()
        img.onload = function () {
          $('.debug__plugin--value').val(`${asset}\nwidth: ${this.width}px\nheight: ${this.height}px`)

        }
        img.src = this.getAssetByName(asset).url
    }


}