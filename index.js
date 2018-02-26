window.onload = function() {
    $("#desc_s").toggle();
    $("#desc_d").toggle();
    document.getElementById("video_background").volume = 0.5;

    $("#sound").click(function() {
        if ($("#sound").attr("src") == "images/sound_on.png") {
            $("#sound").attr("src", "images/sound_off.png")
            $("#video_background").prop("muted", true);

        } else {
            $("#sound").attr("src", "images/sound_on.png")
            $("#video_background").prop("muted", false);
        }
    });
    $("#video").click(function() {
        if ($("#video").attr("src") == "images/pause_video.png") {
            $("#video").attr("src", "images/play_video.png")
            document.getElementById('video_background').pause();
        } else {
            $("#video").attr("src", "images/pause_video.png")
            document.getElementById('video_background').play();
        }
    });

    $("#m_sol").hover(function() {
        $("#desc_s").toggle(500);
    });
    $("#m_due").hover(function() {
        $("#desc_d").toggle(500);
    });

    $("#m_due").click(function() {
        document.getElementById('opcion').play();
        $("#m_due").attr("src", "images/modo_duelo_checked.png");
        $("#m_sol").attr("src", "images/modo_solitario.png");
    });
    $("#m_sol").click(function() {
        document.getElementById('opcion').play();
        $("#m_sol").attr("src", "images/modo_solitario_checked.png");
        $("#m_due").attr("src", "images/modo_duelo.png");
    });
    $("#play").click(function() {

        if ($("#m_sol").attr("src") == "images/modo_solitario_checked.png") {
            $("#video_background").prop("muted", true);
            document.getElementById('startsound').play();
            setInterval(function() {
                location.href = "./solitario/index.html";
            }, 2500)

        } else {
            if ($("#m_due").attr("src") == "images/modo_duelo_checked.png") {
                $("#video_background").prop("muted", true);
                document.getElementById('startsound').play();
                setInterval(function() {
                    location.href = "./duelo/index.html";
                }, 2500)
            }
        }
    });
}