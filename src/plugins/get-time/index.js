export default function (){
    
}
vnjs.on('get-time', () => {
    vnjs.state.data.localtime = getTime();
})

function getTime (){
    const [ hh, mm ] = new Date().toTimeString().split(":");
    return `${hh}-${mm}`;
}