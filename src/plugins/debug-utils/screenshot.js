class ScreenShot {
    WEBHOOK = null
    HOST = null
    avatar_url = 'https://avatars.githubusercontent.com/u/17809187?s=200&v=4'
    content = ''
    username = 'Vnjson'
    imageName = null
    constructor (){}
    get imageURL (){
        return `${this.HOST}/screenshots/${this.imageName}`
    }
    nodeToCanvas (){
        html2canvas($vnjs.$store.$screen.get(0)).then(canvas => {
            const imageData = canvas.toDataURL()
            console.log(imageData)
        })
    }
    saveImageToServer (){
        fetch(`${this.HOST}/vnjson/screenshot`)
            .then(r => {})
            .catch(err => {
                console.error(err)
                this.emit('error', {
                    ru: `Сервер не отвечает <font color="deepskyblue">${this.HOST}</font>`,
                    en: `Server not responding <font color="deepskyblue">${this.HOST}</font>`
                })
            })
    }
    sendToDiscord (){
        const body = {
            avatar_url: this.avatar_url,
            content: this.content,
            username: this.username,
            embeds: [
              {
                description: "$html('.pop-up-discord__textarea').value",
                image: {
                    url: this.imageURL
                }
              }
            ]
        }
        fetch(this.WEB_HOOK, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
        })
        .then(res => {})
        .catch(err => {
            console.error(err)
            this.emit('error', {
                ru: `Нет доступа к webhook <font color="deepskyblue">${this.WEB_HOOK}</font>`,
                en: `No access to <font color="deepskyblue">${this.WEB_HOOK}</font>`
            })
        })
    }
}

export default new ScreenShot()