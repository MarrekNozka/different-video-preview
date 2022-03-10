var links = document.getElementsByClassName('video-preview');
for (let i = 0, len = links.length; i < len; i++) {
    let element = links[i];
    element.img = element.getElementsByTagName('IMG')[0];
    element.imgsrc = element.img.src
    element.imgalt = element.img.alt
    element.frames = element.img.dataset.frames;
    element._width = element.img.naturalWidth;
    element._height = element.img.naturalHeight;
    element.width = element._width/element.frames;
    element.style.width = element.width + 'px';
    element.style.height = element._height + 'px';
    
    element.innerHTML = '<span> ▷ '+element.imgalt+'</span>'
    element.style.backgroundImage = 'url("'+element.imgsrc+'")'
    links[i].addEventListener('mousemove', mouseMove)
}

function mouseMove(event) {
    let x = event.offsetX;
    let step = parseInt(this.width/this.frames)
    let nth = parseInt(x / step)
    this.style.backgroundPosition = (- this.width * nth) + 'px';
}
