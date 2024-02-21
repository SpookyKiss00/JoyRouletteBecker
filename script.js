//version 5

let ingresoUsuario = document.getElementById('ingresoUsuario')
let indiceUsuario = ingresoUsuario.addEventListener('input', comprobarUsuario)

function comprobarUsuario(){
    let nombreCorrecto = false
    let indiceUsuario = 0
    nombre = ingresoUsuario.value

    if (usuariosRegistrados.find(objeto => objeto.nombre === nombre)){
        nombreCorrecto = true
        indiceUsuario = usuariosRegistrados.indexOf(usuariosRegistrados.find(objeto => objeto.nombre === nombre))

        let usuarioExistente = document.getElementById("usuarioExistente");
        usuarioExistente.innerHTML = '<p>El nombre ' + nombre + ' si existe</p>'

        let contrasenaExistente = document.getElementById("contrasenaExistente");
        contrasenaExistente.innerHTML = '<p>Ingresa la contraseña</p>'
    }
    else{
        let usuarioExistente = document.getElementById("usuarioExistente");
        usuarioExistente.innerHTML = '<p>El nombre ' + nombre + ' no existe</p>'
    }

    if (nombreCorrecto) {
        let ingresoContrasena = document.getElementById('ingresoContrasena');
        ingresoContrasena.addEventListener('input', comprobarContrasena);
    } else{
        let contrasenaExistente = document.getElementById("contrasenaExistente");
        contrasenaExistente.innerHTML = '<p></p>'
        }

    function comprobarContrasena(){

        let contrasena = ingresoContrasena.value //Pedir contraseña
            if (usuariosRegistrados[indiceUsuario].contrasena == contrasena){
                let contrasenaExistente = document.getElementById("contrasenaExistente");
                contrasenaExistente.innerHTML = '<p>La contraseña ' + nombre + ' es la correcta</p>'
        
                let botonJugar = document.getElementById("botonJugar");
                botonJugar.innerHTML = '<button type="button" class="botonComprobar btn btn-success"><a href="html/juego.html">Jugar</a></button>'

                botonJugar.addEventListener('click', function(){
                    localStorage.setItem('nombre', nombre)
                })
                }
            else{
                let contrasenaExistente = document.getElementById("contrasenaExistente");
                contrasenaExistente.innerHTML = '<p>La contraseña ' + contrasena + ' es incorrecta</p>'
                }
    }
}

const usuariosRegistrados = [{nombre: "luffy", contrasena: "monkey"}, {nombre: "zoro", contrasena: "roronoa"}, {nombre: "nami", contrasena: "nami"}]
alert("3a Preentrega: Estas son las contraseñas con las que funciona el código(usuario // contraseña): 1) luffy // monkey; 2) zoro // roronoa; 3) nami // nami")

localStorage.setItem('nombre', 'luffy')