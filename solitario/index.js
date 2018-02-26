var listacartas = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
var cartasmesa = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
var numerocarta = Math.floor(Math.random() * 6);
var listacartasr = listacartas.sort(function() { return Math.random() - 0.5 });
var pareja = 0;
var numeroparejas = 0;
var carta1;
var carta2;
var carta1id;
var carta2id;
var sonido = true;
window.onload = generacartas;

$(document).ready(function() {
    document.getElementById("audio").volume = 0.5;
})

function music() {
    if ($("#music").attr("src") == "images/sound_on.png") {
        $("#music").attr("src", "images/sound_off.png");
        document.getElementById("audio").pause();
    } else {
        $("#music").attr("src", "images/sound_on.png")
        document.getElementById("audio").play();
    }
}

function apagarsonido() {
    if ($("#botonsonido").attr("src") == "images/sound_on.png") {
        $("#botonsonido").attr("src", "images/sound_off.png");
        sonido = false;
    } else {
        $("#botonsonido").attr("src", "images/sound_on.png");
        sonido = true;
    }
}

function generacartas() {
    var numeroparejas = 0;
    var carta1;
    var carta2;
    var carta1id;
    var carta2id;
    var pareja = 0;
    listacartasr = listacartas.sort(function() { return Math.random() - 0.5 });
    $(".flip").flip(false);
    $(".flip").attr("onclick", "cambiarcarta(this)");
    $("#marcador img").attr("src", "images/marcador/pokeball.png");
    setTimeout(() => {
        for (var i = 0; i < listacartasr.length; i++) {
            $(".cartaback")[i].src = ("images/cartas/carta" + listacartasr[i] + ".jpg");
        }
    }, 150);

}

function cambiarcarta(carta) {
    if (pareja < 2) {
        $(carta).flip(true)
        $("#pk" + listacartasr[$(carta).attr("id")]).attr("src", "images/marcador/pk" + listacartasr[$(carta).attr("id")] + ".png");
        if (sonido == true) {
            document.getElementById("sound" + listacartasr[$(carta).attr("id")]).play();
        }
        $(carta).attr("onclick", "cartaCancelada()");
        pareja++;
        if (pareja == 1) {
            if (carta1 != carta2) {
                $("#" + carta1id).flip(false);
                // $("#" + carta1id).attr("src", "images/cartas/reverso_carta.jpg");
                $("#" + carta1id).attr("onclick", "cambiarcarta(this)");
                // $("#" + carta2id).attr("src", "images/cartas/reverso_carta.jpg");
                $("#" + carta2id).flip(false);
                $("#" + carta2id).attr("onclick", "cambiarcarta(this)");
            }
            carta1 = listacartasr[$(carta).attr("id")];
            carta1id = $(carta).attr("id")
        }
        if (pareja == 2) {

            carta2 = listacartasr[$(carta).attr("id")];
            carta2id = $(carta).attr("id")
            if (carta1 == carta2) {
                numeroparejas++;
                $("#" + carta1id).attr("onclick", "cartaCancelada()");
                $("#" + carta2id).attr("onclick", "cartaCancelada()");
                $("#pk" + listacartasr[$(carta).attr("id")]).attr("src", "images/marcador/pk" + listacartasr[$(carta).attr("id")] + "n.png");
                if (numeroparejas == 6) {
                    setTimeout(() => {
                        location.href = "../victoria/solo/index.html";
                    }, 1000);
                }

            }
            pareja = 0;
        }
    }
}

function cartaCancelada() {}

function volver() {
    //cambiar al subir a la nube
    location.href = "../index.html";
}