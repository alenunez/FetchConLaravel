const url = 'http://localhost:8000/api/productos/4'

const mostrarData= (data)=>{
    console.log(data)
    let id=data.id
    let descripcion=data.descripcion
    let categoria=data.id_categoria
    document.getElementById('id').value=innerHTML=id
    document.getElementById('descripcion').value=innerHTML=descripcion
    document.getElementById('categoria').value=innerHTML= categoria

    localStorage.setItem('id',data.id)



}

fetch(url).then(response=>response.json())
.then(data=>mostrarData(data))
.catch(console.log(error()))

