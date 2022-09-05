export default function (){
    vnjs.on('eval', (str) => {
        window.eval(str)
    })
}