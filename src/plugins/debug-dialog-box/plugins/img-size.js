export default function (asset) {
    const _vnjs = this
    const char = this.getCharacters()[0]
    if(asset) {
        const img = new Image()
        img.onload = function () {
          const str = `${asset}<br>width: ${this.width}px<br>height: ${this.height}px`
          $('.debug__output').html(str)
        }
        img.src = this.getAssetByName(asset).url
    }


}