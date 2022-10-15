let meuHTML = document.querySelector('html');
let minhaImagem = document.querySelector('img');
let meuButton = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function definirNomeUsuario(){
    let meuNome = prompt('Por favor o nome meu confadre');

    if(!meuNome){
        definirNomeUsuario();
    } else{
        let nomeGuardado = localStorage.getItem('nome');
        meuCabecalho.textContent = 'VENHA VER NOSSA SEITA ' + nomeGuardado;
    }

    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'VENHA VER NOSSA SEITA ' + meuNome;

    
}

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/Shrek.jpg'){
        minhaImagem.setAttribute('src', 'imagens/Shrek2.jpeg');
    } else{
        minhaImagem.setAttribute('src', 'imagens/Shrek.jpg');
    }
};

if(!localStorage.getItem('nome') || null){
    definirNomeUsuario();
} else{
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'VENHA VER NOSSA SEITA ' + nomeGuardado;
}

meuButton = function(){definirNomeUsuario()};

