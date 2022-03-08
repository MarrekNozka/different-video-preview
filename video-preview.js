var img;
var frames;
var imgsrc;
var width;
var _width;
var _height;
var imgalt;
var nth;

function start(element) {
    img = element.getElementsByTagName('IMG')[0];
    imgsrc = img.src
    imgalt = img.alt
    frames = img.dataset.frames;
    _width = img.naturalWidth;
    _height = img.naturalHeight;
    width = _width/frames;
    element.style.width = width + 'px';
    element.style.height = _height + 'px';
    
    element.innerHTML = '<span>'+imgalt+'</span>'
    element.style.backgroundImage = 'url("'+imgsrc+'")'

}

function mouseMove(event) {
    var x = event.offsetX;
    var step = parseInt(width/frames)
    var nth = parseInt(x / step)
    this.style.backgroundPosition = (-width * nth) + 'px';

}


var links = document.getElementsByClassName('video_preview');

for (let i = 0, len = links.length; i < len; i++) {
    start(links[i]);
    links[i].addEventListener('mousemove', mouseMove)
}
