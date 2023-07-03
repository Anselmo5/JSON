function buscar(){
    let cod = document.getElementById("cod").value
    let marca= document.getElementById("marca")
    let modelo = document.getElementById("modelo")
    let ano = document.getElementById("ano")
    let cor = document.getElementById("cor")
    let url = "../JSON/automoveis.json"
    fetch(url)// e utilizado para tratar arquivo
        .then(res => res.json())
        .then(data =>{
            for(var automo of data.automoveis){
                if(cod == automo.placa){
                    marca.value = automo.marca
                    modelo.value = automo.modelo
                    ano.value = automo.ano
                    cor.value = automo.cor
                    break
                }
            }
        })
}