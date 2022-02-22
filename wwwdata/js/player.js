var player = videojs("player", {liveui: true});

player.ready(function() {
    let params = new URLSearchParams(window.location.search);
    let stream = params.get("stream");

    if (stream) {
        player.poster("/live/" + stream + "/preview.jpg");
        player.src({
            src: "/live/" + stream + "/index.m3u8",
            type: "application/vnd.apple.mpegurl"
        });
    } else {
        player.poster("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/PM5644.svg/720px-PM5644.svg.png");
        player.src({
            src: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
            type: "application/vnd.apple.mpegurl"
        });
    }
});
