const $tpl = $(`<canvas class="vnjson__chart component"></canvas>`);

class Chart {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = "2";
        this.ctx.arc(100, 100, 90, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
    pie(w=600, h=400, datalist) {
        var radius = h / 2 - 5;
        var centerx = w / 2;
        var centery = h / 2;
        var total = 0;
        for (x = 0; x < datalist.length; x++) {
            total += datalist[x];
        }
        var lastend = 0;
        var offset = Math.PI / 2;
        for (x = 0; x < datalist.length; x++) {
            var thispart = datalist[x];
            this.ctx.beginPath();
            this.ctx.fillStyle = colist[x];
            this.ctx.moveTo(centerx, centery);
            var arcsector = Math.PI * ((2 * thispart) / total);
            this.ctx.arc(
                centerx,
                centery,
                radius,
                lastend - offset,
                lastend + arcsector - offset,
                false
            );
            this.ctx.lineTo(centerx, centery);
            this.ctx.fill();
            this.ctx.closePath();
            lastend += arcsector;
        }
    }
}
let chart = null;

export default () => {
   /* vnjs.store.screen.append($tpl);
    chart = new Chart($tpl.get(0));
    chart.draw();*/
    //var datalist= new Array(35, 25, 20, 12, 7, 1); 
    //var colist = new Array('blue', 'red', 'green', 'orange', 'gray', 'yellow');
   // char.pie(datalist);
   // $tpl.show();
};
/*
vnjs.on("chart", (args) => {
    if (args) {
    } else {
        $tpl.hide();
    }
});
*/