var listacartas = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
var cartasmesa = [0, 1, 2, 3, 4, 5];
var numerocarta = Math.floor(Math.random() * 6);
var listacartasr = listacartas.sort(function() { return Math.random() - 0.5 });
var pareja = 0;
var carta1;
var carta2;
var carta1id;
var carta2id;

function generacartas() {
    listacartasr = listacartas.sort(function() { return Math.random() - 0.5 });
    $(".carta").attr("src", "images/cartas/reverso_carta.jpg");
    $(".carta").attr("onclick", "cambiarcarta(this)");
    $("#marcador img").attr("src", "images/marcador/pokeball.png");

}

function cambiarcarta(carta) {
    if (pareja < 2) {
        $(carta).attr("src", "images/cartas/carta" + listacartasr[$(carta).attr("id")] + ".jpg");
        $("#pk" + listacartasr[$(carta).attr("id")]).attr("src", "images/marcador/pk" + listacartasr[$(carta).attr("id")] + ".png");
        document.getElementById("sound" + listacartasr[$(carta).attr("id")]).play();
        $(carta).attr("onclick", "cartaCancelada()");
        pareja++;
        if (pareja == 1) {
            if (carta1 != carta2) {
                $("#" + carta1id).attr("src", "images/cartas/reverso_carta.jpg");
                $("#" + carta1id).attr("onclick", "cambiarcarta(this)");
                $("#" + carta2id).attr("src", "images/cartas/reverso_carta.jpg");
                $("#" + carta2id).attr("onclick", "cambiarcarta(this)");
            }
            carta1 = listacartasr[$(carta).attr("id")];
            carta1id = $(carta).attr("id")
        }
        if (pareja == 2) {
            carta2 = listacartasr[$(carta).attr("id")];
            carta2id = $(carta).attr("id")
            if (carta1 == carta2) {
                $("#" + carta1id).attr("onclick", "cartaCancelada()");
                $("#" + carta2id).attr("onclick", "cartaCancelada()");
                $("#pk" + listacartasr[$(carta).attr("id")]).attr("src", "images/marcador/pk" + listacartasr[$(carta).attr("id")] + "n.png");
                document.getElementById("sound" + listacartasr[$(carta).attr("id")]).play();

            }
            pareja = 0;
        }
    }
}

function cartaCancelada() {
    alert("carta ya seleccionada");
}
$("#bback").click(function() {
    //cambiar al subir a la nube
    location.href = "file:///C:/Users/JuanCarlos/Desktop/DAW%202/DWEC/Cartas%20Parejas/index.html";
});