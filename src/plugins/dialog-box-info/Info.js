// character.info
class Info {

    openModal = false

    constructor ($info, $avatar){
      this.$info = $info
      this.$avatar = $avatar
      this.mount()
    }
    mount (){
      this.$info.on('mousedown', () => this.close() )
    }
    open (){
      if(this.$info.text()==='') return
      this.$info.fadeIn(200)
      this.openModal = true
      this.hideBorder()
    }
    close (){
      this.$info.hide()
      this.openModal = false
    }
    hideBorder (){
      this.$avatar.css('border-color', 'transparent')
    }
    toggle (){
      if(this.openModal){
        this.close()
      }
      else{
        this.open()
      }
    }
    print (data){
      this.$info.html(data)
    }
}

export default Info