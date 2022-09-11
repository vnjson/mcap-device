import Time from './Time.js';

export default function (){
    const time = new Time();

    vnjs.on('get-localtime', (args) => time.parse(args) )  
}

