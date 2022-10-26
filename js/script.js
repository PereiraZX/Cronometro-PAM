// Pegando os botões
const buttonPlay = document.getElementById("play");
const buttonPause = document.getElementById("pause");
const buttonReset = document.getElementById("reset");

// Pegando span tempo
var tempo = document.getElementById("tempo");

// tempos
var hr = 0;
var min = 0;
var sec = 0;
var intervalo;

// eventos
buttonPlay.addEventListener("click", cronometro);
buttonPause.addEventListener("click", pause);
buttonReset.addEventListener("click", reset);

// Função cronometrar
function cronometro() {
    // Desabilitando o botão play
    buttonPlay.setAttribute("disabled", "disabled");
    play();
    intervalo = setInterval(play, 1000);
}

// Start cronometro
function play() {
    sec++;

    // Segundos for == 60 isso significa 1 minuto
    if(sec == 60) {
        min++;
        sec = 0;

        // Minutos for == 60 isso significa 1 hora
        if(min == 60) {
            hr++;
            min = 0;
        }
    }

    // Saida no html
    tempo.innerHTML = `${time(hr)}:${time(min)}:${time(sec)}`;

}

// Pause cronometro
function pause() {
    // Habilitando o botão play
    buttonPlay.removeAttribute("disabled", "disabled");

    // Limpando intervalo de 1s
    clearInterval(intervalo);
}

// Reiniciar cronometro
function reset() {
    // Habilitando o botão play
    buttonPlay.removeAttribute("disabled", "disabled");

    // Limpando intervalo de 1s
    clearInterval(intervalo);

    hr = 0;
    min = 0;
    sec = 0;
    tempo.innerHTML = "00:00:00";
}

// Formatando saida
function time(digito) {
    if(digito < 10) {
        return "0" + digito;
    } else {
        return digito;
    }
}
