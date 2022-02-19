var player = videojs("player");

player.ready(function() {
    let params = new URLSearchParams(window.location.search);
    let stream = params.get("stream");

    if (stream) {
        player.src({
            src: "/live/" + stream + ".mpd",
            type: "application/dash+xml"
        });
    } else {
        player.src({
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            type: "video/mp4"
        });
    }
});
