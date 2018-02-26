var listacartas = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
var cartasmesa = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
var numerocarta = Math.floor(Math.random() * 6);
var listacartasr = listacartas.sort(function() { return Math.random() - 0.5 });
var listacartasr2 = listacartas.sort(function() { return Math.random() - 0.5 });
var pareja = 0;
var carta1;
var carta2;
var carta1id;
var carta2id;
var p1parejas = 0;
var p2parejas = 0;
var sonido = true;
var cambiaturno = true;

generacartas();

window.onload = generacartas;
$(document).ready(function() {
    document.getElementById("audio").volume = 0.3;
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
    $("#alert1").hide();
    $("#alert2").hide();
    $("#marcador1-pk > img").attr("src", "images/marcador/pk/vacio.png");
    $("#marcador2-pk > img").attr("src", "images/marcador/pk/vacio.png");
    pareja = 0;
    var carta1;
    var carta2;
    var carta1id;
    var carta2id;
    var p1parejas = 0;
    var p2parejas = 0;
    var cambiaturno = false;
    listacartasr = listacartas.sort(function() { return Math.random() - 0.5 });
    listacartasr2 = listacartas.sort(function() { return Math.random() - 0.5 });
    // $(".flip").attr("onclick", "cambiarcarta(this)");
    // for (var i = 0; i < listacartasr.length; i++) {
    //     $(".cartaback")[i].src = ("images/cartas/carta" + listacartasr[i] + ".jpg");
    // }
    $(".flip").flip(false);
    setTimeout(() => {
        for (let i = 0; i < listacartasr.length; i++) {
            $(".cartaback")[i].src = ("images/cartas/carta" + listacartasr[i] + ".jpg");


        }
        for (let i = 0; i < listacartasr2.length; i++) {
            $(".cartaback2")[i].src = ("images/cartas/carta" + listacartasr[i] + ".jpg");

        }
    }, 150);
    $(".flip1").attr("onclick", "cambiarcarta(this)");
    $(".flip2").attr("onclick", "noturno(2)");
    $("#player-image").attr("src", "images/marcador/p1.png")
}

function cambiarcarta(carta) {
    if (pareja < 2) {
        $(carta).flip(true)
        if ($(carta).attr("id") < 12) {
            $("#pk" + listacartasr[$(carta).attr("id")]).attr("src", "images/marcador/pk/color/pk" + listacartasr[$(carta).attr("id")] + ".png");
            if (sonido) {
                document.getElementById("sound" + listacartasr[$(carta).attr("id")]).play();
            }
        } else {
            $("#p2pk" + listacartasr2[$(carta).attr("id") - 12]).attr("src", "images/marcador/pk/color/pk" + listacartasr2[$(carta).attr("id") - 12] + ".png");
            if (sonido) {
                document.getElementById("sound" + listacartasr2[$(carta).attr("id") - 12]).play();
            }
        }
        $(carta).attr("onclick", "cartaCancelada()");
        pareja++;
        if (pareja == 1) {
            if ($(carta).attr("id") < 12) {
                carta1 = listacartasr[$(carta).attr("id")];
            } else {
                carta1 = listacartasr2[$(carta).attr("id") - 12];
            }
            carta1id = $(carta).attr("id")
        }
        if (pareja == 2) {

            if ($(carta).attr("id") < 12) {
                carta2 = listacartasr[$(carta).attr("id")];
            } else {
                carta2 = listacartasr2[$(carta).attr("id") - 12];
            }
            carta2id = $(carta).attr("id");
            if (carta1 == carta2) {
                if ($(carta).attr("id") < 12) {
                    p1parejas++;
                } else {
                    p2parejas++;
                }
                $("#" + carta1id).attr("onclick", "cartaCancelada()");
                $("#" + carta2id).attr("onclick", "cartaCancelada()");
                $("#" + carta1id).removeClass("no-flip");
                $("#" + carta2id).removeClass("no-flip");
                if ($(carta).attr("id") < 12) {
                    $("#pk" + listacartasr[$(carta).attr("id")]).attr("src", "images/marcador/pk/bn/pk" + listacartasr[$(carta).attr("id")] + ".png");
                } else {
                    $("#p2pk" + listacartasr2[$(carta).attr("id") - 12]).attr("src", "images/marcador/pk/bn/pk" + listacartasr2[$(carta).attr("id") - 12] + ".png");
                }
            }
            setTimeout(function() {
                if (carta1 != carta2) {
                    $("#" + carta1id).flip(false);
                    // $("#" + carta1id).attr("src", "images/cartas/reverso_carta.jpg");
                    $("#" + carta1id).attr("onclick", "cambiarcarta(this)");
                    // $("#" + carta2id).attr("src", "images/cartas/reverso_carta.jpg");
                    $("#" + carta2id).flip(false);
                    $("#" + carta2id).attr("onclick", "cambiarcarta(this)");
                }
                if (p1parejas == 6) {
                    location.href = "../victoria/rojo/index.html";
                }
                if (p2parejas == 6) {
                    location.href = "../victoria/azul/index.html";
                }
                // alert(cambiaturno);
                if (cambiaturno == true) {
                    $("[class*='flip1 no-flip']").attr("onclick", "noturno(1)");
                    $("[class*='flip2 no-flip']").attr("onclick", "cambiarcarta(this)");
                    $("#player-image").attr("src", "images/marcador/p2.png")
                    cambiaturno = false;
                } else {
                    $("[class*='flip1 no-flip']").attr("onclick", "cambiarcarta(this)");
                    $("[class*='flip2 no-flip']").attr("onclick", "noturno(2)");
                    $("#player-image").attr("src", "images/marcador/p1.png")
                    cambiaturno = true;
                    // alert(cambiaturno);
                }
                pareja = 0;
            }, 1000);

        }
    }
}

function cartaCancelada() {
    // alert("carta ya seleccionada");
}

function noturno(p) {
    /*$("#alert" + p).toggle(fast, function() {
        $("#alert" + p).toggle();
    });*/

    $("#alert" + p).fadeIn(1000, function() {
        $(this).fadeOut(1000)
    })
}

function volver() {
    location.href = "../index.html";
}

function sound() {
    if ($("#sound").attr("src") == "images/sound_on.png") {
        $("#sound").attr("src", "images/sound_off.png");
        document.getElementById("audio").pause();

    } else {
        $("#sound").attr("src", "images/sound_on.png")
        document.getElementById("audio").play();
    }
}