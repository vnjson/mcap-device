

    function greyscale(data){
        const { target, value, duration, type } = data;
 
    
    
        Object.assign(target.style, {
            'filter': `${type}(${value})`,
            '-webkit-filter': `${type}(${value})`,
            'transition': `${duration}s filter linear`,
            '-webkit-transition': `${duration}s  -webkit-filter linear`
        });
    };

export default function (){
    this.on('filter', (param) => {
        const { target, type, duration } = param
        greyscale({
            target: document.querySelector(`.vnjson-${target}`),
            value: '35',
            duration: 3000/1000,
            type: 'grayscale'
        });
    })
    this.on('image.update', ($img) => {
        $img.css('filter', 'unset')
    })
    // Так не канает. Так как изображения задаются через style
    /*
    this.on('scene', param => {
        document.querySelector(`.vnjson-scene`).removeAttribute('style')
    })
    */

}

