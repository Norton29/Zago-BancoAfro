
let searchBox = document.querySelector('#searchBox');
let imagens =  document.querySelectorAll('.container .container-imagem .imagem');

searchBox.oninput = () => {
    imagens.forEach(hide => hide.style.display = 'none');
    let valor = searchBox.value;

    imagens.forEach(filtro => {
        let titulo = filtro.getAttribute('data-title');

        if(valor == titulo){
            filtro.style.display = "block";

        }

        if(searchBox.value == ''){
            filtro.style.display = "block";
        }
    })
}