
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}



document.addEventListener('DOMContentLoaded', function() {
    var lazyVideos = [].slice.call(document.querySelectorAll('.youtube-lazyload'));

    lazyVideos.forEach(function(lazyVideo) {
        var playButton = lazyVideo.querySelector('.play-button');
        playButton.addEventListener('click', function() {
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/' + lazyVideo.dataset.embed + '?autoplay=1';
            iframe.width = '560';
            iframe.height = '315';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            lazyVideo.parentNode.replaceChild(iframe, lazyVideo);
        });
    });
});

