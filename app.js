const listaPrincipal = []

function objetoPc(nombre,error){
    const registro = {
        nombre,
        error,
        check:`<input type="checkbox">error</input>`
    }
    return registro
}

function mostrarTabla(){
    let tbody = document.getElementById("tabla")
    tbody.innerHTML = ""
    listaPrincipal.map((e,i)=>{
        tbody.innerHTML += `
        <tr>
        <th>${i}</th>
        <td>${e.nombre}</td>
        <td>${e.error}</td>
        <td>${e.check}</td>
        </tr>
        `
    })
}

function registro (event){
    event.preventDefault()
    let nombre = document.getElementById('nombre')
    let error = document.getElementById("error")
    let registro = objetoPc(nombre.value,error.value)
    listaPrincipal.push(registro)
    nombre.value = ""
    error.value = ""
    mostrarTabla()
}

