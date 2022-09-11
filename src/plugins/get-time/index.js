import Time from './Time.js';

export default function (){
    const time = new Time();

    vnjs.on('get-time', (args) => time.parse(args) )  
}

