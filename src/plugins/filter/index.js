

    function greyscale(data){
        const { target, size, duration } = data;
 
    
    
        Object.assign(target.style, {
            'filter': `grayscale(${size})`,
            '-webkit-filter': `grayscale(${size})`,
            'transition': `${duration}s filter linear`,
            '-webkit-transition': `${duration}s  -webkit-filter linear`
        });
    };

export default function (){
 
  
    this.on('filter', (param) => {
        const { target, type } = param
        greyscale({
            target: document.querySelector(`.vnjson-${target}`),
            size: 5,
            duration: 0.9
        });

     
    })
    // Так не канает. Так как изображения задаются через style
    /*
    this.on('scene', param => {
        document.querySelector(`.vnjson-scene`).removeAttribute('style')
    })
    */

}

