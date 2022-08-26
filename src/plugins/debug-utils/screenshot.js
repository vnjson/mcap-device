
export default function (){
    html2canvas(document.querySelector("#screen")).then(canvas => {
        //document.body.appendChild(canvas)
        const imageData = canvas.toDataURL();
        console.log(imageData)
    });
}