const botaoSortear = document.querySelector("div.box button");
let numeroSorteado = document.querySelector("div.box h1");
let roleta = [];

for(i = 0; i <= 50; i++){
    roleta.push(i)
}

botaoSortear.addEventListener("click", () =>{
    numeroSorteado.innerHTML = "O número sorteado é " + roleta[Math.floor(Math.random() * roleta.length)]
})
    

