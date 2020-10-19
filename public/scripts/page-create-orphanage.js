const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;
// create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lat;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon } )
    .addTo(map)
})

// add field photo
function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para dubplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar a duplicação da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // verificar se o camp esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }

    //limpar o campo antes de adicicionar ao container de imagens
    input.value = ""
    
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();



}

// selecionar sim e não

function toggleSelect(event) {

    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach (button => button.classList.remove('active'))

    // colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]"')
    input.value = button.dataSet.value
}

// function validate(event) {
//     //validar se lat e lng estão preenchidos
//     const needsLatAndLng = false;
//     if(needsLatAndLng == false) {
//     event.preventDefault()
//     alert('Escolha uma localização no mapa')
//     } else {
//         needsLatAndLng = false;
//     }
// }