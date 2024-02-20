function ruleta(){
    let tipoApuesta = document.getElementById("tipoApuesta")
    tipoApuesta.innerHTML = '<button id="botonNumero" type="button" class="btn btn-primary">A número</button> <button id="botonColor" ="button" class="btn btn-success">A color</button>'

    // console.log(cantidadNumeros.value)

    function NumeroRandom (){
        apuesta = numeroApuesta.value
        cantidad = cantidadNumeros.value
        if (apuesta < 0 || apuesta > cantidad || isNaN(apuesta)){ //Corregir el ISNAN
            alert ("El número debe ser los de la ruleta, entre 0 y " + cantidad)
        }else{
            let numeroRuleta = Math.floor(Math.random()*(cantidad))
        
            //Resultado
            if (numeroRuleta == apuesta){
                let resultadoApuesta = document.getElementById("resultadoApuesta").innerHTML = '<div class="alert alert-primary" role="alert">GANASTE!, de ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta +'</div>'
            }
            else{
                let resultadoApuesta = document.getElementById("resultadoApuesta").innerHTML = '<div class="alert alert-danger" role="alert">Perdiste, de ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta +'</div>'
            }
        }
    }
    
    function ColorRandom (color){
        apuesta = color
        cantidad = cantidadNumeros.value
        let numeroRuleta = Math.floor(Math.random()*(cantidad))
        let colorReal="color"
        if (numeroRuleta==0){
            colorReal = "verde"
        }
        else if (numeroRuleta%2==0){
            colorReal = "rojo"
        }
        else if (numeroRuleta%2!==0){
            colorReal = "negro"
        }
    
        //Resultado
        if (colorReal == apuesta){
            let resultadoApuesta = document.getElementById("resultadoApuesta").innerHTML = '<div class="alert alert-primary" role="alert">GANASTE!, de ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta +' por ende el color fue ' + colorReal+'</div>'
        }
        else{
            let resultadoApuesta = document.getElementById("resultadoApuesta").innerHTML = '<div class="alert alert-danger" role="alert">Perdiste, de ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta +' por ende el color fue ' + colorReal+'</div>'
        }
    }

    //Tipo de apuesta por número---------------------------
    let apostarNumero = document.getElementById("botonNumero").addEventListener('click', apuestaNumero)

    function apuestaNumero(){
        quitarBotonColor = document.getElementById('botonColor').remove()
        let contenedorApuestas = document.getElementById("contenedorApuestas").innerHTML = '<span class="input-group-text" id="basic-addon1">:D</span> <input id="numeroApuesta" type="number" class="form-control" placeholder="N° a apostar" required> <button id="botonApostar" type="button" class="btn btn-primary">Apostar</button>'

        let numeroApuesta = document.getElementById("numeroApuesta")
        let apostarNumero = document.getElementById("botonApostar").addEventListener('click', NumeroRandom);
    }

    //Tipo de apuesta por color---------------------------
    let apostarColor = document.getElementById("botonColor").addEventListener('click', apuestaColor)

    function apuestaColor() {
        quitarBotonNumero = document.getElementById('botonNumero').remove()
        let contenedorApuestas = document.getElementById("contenedorApuestas").innerHTML = '<button id="colorRojo" value="rojo" type="button" class="btn btn-danger">Rojo (Pares)</button> <button id="colorVerde" value="verde" type="button" class="btn btn-success">Verde (N° 0)</button> <button id="colorNegro" value="negro" type="button" class="btn btn-dark">Negro (Impares)</button>'

        let colorRojo = document.getElementById("colorRojo")
        colorRojo.addEventListener('click', function() {
            ColorRandom("rojo");
        });

        let colorVerde = document.getElementById("colorVerde")
        colorVerde.addEventListener('click', function() {
            ColorRandom("verde");
        });

        let colorNegro = document.getElementById("colorNegro")
        colorNegro.addEventListener('click', function() {
            ColorRandom("negro");
        });


    }

    }

//Consultar acerca de la cantidad de números que tiene la ruleta
let cantidadNumeros = document.getElementById("cantidadNumeros")
cantidadRuleta = cantidadNumeros.addEventListener('input', ruleta)

nombreJugador = localStorage.getItem('nombre')
let jugador = document.getElementById('jugador').innerHTML = '<h3>¡'+ nombreJugador + ', indícanos con cuántos números quieres jugar a la ruleta!</h3>'