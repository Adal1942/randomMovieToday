const listContainer = document.querySelector("#container");

function render(filmography){
    let list = '';

    if(filmography.length <= 0){
        list += `<div id="no-project">Nenhum filme encontrado</div>`
    }else{
        filmography.forEach((cod, index) =>{
            list+= `
                <div class="card">
                    <div class="front">
                        <div class="poster">
                            <img src="../assets/img/capas/${cod.capa}.png" alt="">
                        </div>
                    </div>
                   
                    <div class="back">
                        <div class="details">
                                <h2>Título: ${cod.name}</h2>
                                <h3>Direção: ${cod.direcao}</h3>
                                <div class="rating">
                                    <i class="fa-solid fa-star"></i>
                                    <span>${cod.nota}/10 IMDb</span>
                                </div>
                                <div class="ageAndTime">
                                    <p>${cod.age} - ${cod.duration}</p>
                                </div>
                                <div class="tags">
                                    <span class="${cod.tag1}">${cod.tag1}</span>
                                    <span class="${cod.tag2}">${cod.tag2}</span>
                                </div>
                                <div class="sinopse">
                                    <p>${cod.sinopse}</p>
                                </div>
                                <div class="streaming">
                                    <h4>Onde assistir?</h4>
                                    <ul>
                                        <li><img src="../assets/img/logos/${cod.logo1}" alt=""></li>
                                        <li><img src="../assets/img/logos/${cod.logo2}" alt=""></li>
                                        <li><img src="../assets/img/logos/${cod.logo3}" alt=""></li>
                                        <li><img src="../assets/img/logos/${cod.logo4}" alt=""></li>
                                        <li><img src="../assets/img/logos/${cod.logo5}" alt=""></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            `
        })
    }

    listContainer.innerHTML = list;
};

render(filmography);