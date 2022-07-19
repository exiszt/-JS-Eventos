let indicePregunta = 0
let puntaje = 0
let devolucion
let usuario = document.querySelector("#nombreusuario")
let comenzar = document.querySelector("#comenzar")

usuario.onchange = () => {console.log(usuario.value)}
comenzar.onclick = () => {
    cargarPregunta(indicePregunta)

function cargarPregunta(index) {
    objetoPregunta = base[index]
    opciones = [...objetoPregunta.alternativas]
    opciones.push(objetoPregunta.respuesta)
    for (let i = 0; i < 4; i++) {
        opciones.sort(() => Math.random() - 0.5)
    }
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("opcion1").innerHTML = opciones[0]
    document.getElementById("opcion2").innerHTML = opciones[1]
    document.getElementById("opcion3").innerHTML = opciones[2]
    document.getElementById("opcion4").innerHTML = opciones[3]

    opcion1.onclick = () => { elegir(0) }
    opcion2.onclick = () => { elegir(1) }
    opcion3.onclick = () => { elegir(2) }
    opcion4.onclick = () => { elegir(3) }
}

function elegir(index) {
    let validez = opciones[index] == objetoPregunta.respuesta
    if (validez) {
        puntaje++
        alert(`¡Correcto!`)
    } else {
        alert(`Incorrecto. La respuesta correcta es "${objetoPregunta.respuesta}".`)
    }

    indicePregunta++
    if (indicePregunta >= base.length) {
        devolucion = document.querySelector("#devolucion").innerHTML=`${usuario.value}, tu puntaje es: ${puntaje}/${base.length}`
        indicePregunta = 0
        puntaje = 0
    } else {
        cargarPregunta(indicePregunta)
    }
}
}