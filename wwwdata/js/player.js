var player = videojs("player", {liveui: true});

player.ready(function() {
    let params = new URLSearchParams(window.location.search);
    let stream = params.get("stream");

    if (stream) {
        player.poster("/live/" + stream + "/preview.jpg");
        player.src({
            src: "/live/" + stream + "/",
            type: "application/vnd.apple.mpegurl"
        });
    }
});
