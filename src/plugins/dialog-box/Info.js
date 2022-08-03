// character.info
class Info {

    openModal = false

    constructor ($node){
      this.$node = $node
      this.mount()
    }
    mount (){
      this.$node.on('mousedown', () => this.close() )

    }
    open (){
      if(this.$node.text()==='') return
      this.$node.fadeIn(200)
      this.openModal = true
    }
    close (){
      this.$node.fadeOut(200)
      this.openModal = false
    }
    print (data){
      this.$node.html(data)
    }
}

export default Info