// ===============================
// SANFONA DA FAMÍLIA H1 ATÉ H6
// ===============================

// Aqui selecionamos todos os elementos que possuem a classe "sanfonah1-header".
// O querySelectorAll procura vários elementos no HTML e devolve uma lista deles.
const sanfonah1Headers = document.querySelectorAll('.sanfonah1-header');

// O forEach percorre cada item da lista encontrado acima.
// Em outras palavras: ele vai pegar cada botão dessa sanfona, um por um.
sanfonah1Headers.forEach(header => {

    // addEventListener serve para "ouvir" um evento.
    // Aqui estamos dizendo: quando o usuário clicar no botão...
    header.addEventListener('click', () => {

        // nextElementSibling pega o próximo elemento irmão no HTML.
        // Nesse caso, ele pega a área de conteúdo que vem logo depois do botão.
        const sanfonah1Content = header.nextElementSibling;

        // classList.toggle('active') adiciona a classe "active" se ela não existir
        // e remove se ela já existir.
        // Isso faz a sanfona abrir e fechar.
        sanfonah1Content.classList.toggle('active');
    });
});


// ===============================
// SANFONA DA TAG <a>
// ===============================

// Seleciona todos os cabeçalhos da sanfona da tag <a>.
const sanfona_aHeaders = document.querySelectorAll('.sanfona_a-header');

// Percorre cada cabeçalho encontrado.
sanfona_aHeaders.forEach(header => {

    // Adiciona o evento de clique em cada botão.
    header.addEventListener('click', () => {

        // Pega o conteúdo logo abaixo do botão clicado.
        const sanfona_aContent = header.nextElementSibling;

        // Abre ou fecha esse conteúdo.
        sanfona_aContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DOS BOTÕES
// ===============================

// Seleciona todos os cabeçalhos da área de botões.
const sanfona_botaoHeaders = document.querySelectorAll('.sanfona_botao-header');

// Percorre cada botão encontrado.
sanfona_botaoHeaders.forEach(header => {

    // Quando clicar...
    header.addEventListener('click', () => {

        // ...pega o conteúdo logo embaixo...
        const sanfona_botaoContent = header.nextElementSibling;

        // ...e alterna a classe active.
        sanfona_botaoContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DAS IMAGENS
// ===============================

// Seleciona todos os cabeçalhos da área de imagens.
const sanfona_imgHeaders = document.querySelectorAll('.sanfona_img-header');

// Percorre cada um deles.
sanfona_imgHeaders.forEach(header => {

    // Adiciona o clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo associado a esse botão.
        const sanfona_imgContent = header.nextElementSibling;

        // Abre ou fecha o conteúdo.
        sanfona_imgContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DA TAG <main>
// ===============================

// Seleciona todos os cabeçalhos da área main.
const sanfona_mainHeaders = document.querySelectorAll('.sanfona_main-header');

// Percorre cada cabeçalho.
sanfona_mainHeaders.forEach(header => {

    // Quando clicar...
    header.addEventListener('click', () => {

        // ...pega o próximo conteúdo...
        const sanfona_mainContent = header.nextElementSibling;

        // ...e abre/fecha.
        sanfona_mainContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO FOOTER
// ===============================

// Seleciona todos os cabeçalhos da área footer.
const sanfona_footerHeaders = document.querySelectorAll('.sanfona_footer-header');

// Percorre cada um.
sanfona_footerHeaders.forEach(header => {

    // Adiciona o clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo abaixo do botão.
        const sanfona_footerContent = header.nextElementSibling;

        // Alterna a abertura e o fechamento.
        sanfona_footerContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO INPUT
// ===============================

// Seleciona os cabeçalhos da área input.
const sanfona_inputHeaders = document.querySelectorAll('.sanfona_input-header');

// Percorre todos eles.
sanfona_inputHeaders.forEach(header => {

    // Define o que acontece no clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo relacionado.
        const sanfona_inputContent = header.nextElementSibling;

        // Abre ou fecha esse conteúdo.
        sanfona_inputContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO ÁUDIO
// ===============================

// Seleciona os cabeçalhos da área de áudio.
const sanfona_audioHeaders = document.querySelectorAll('.sanfona_audio-header');

// Percorre cada cabeçalho.
sanfona_audioHeaders.forEach(header => {

    // Adiciona o evento de clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo logo abaixo do botão.
        const sanfona_audioContent = header.nextElementSibling;

        // Alterna a classe active.
        sanfona_audioContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO VÍDEO
// ===============================

// Seleciona os cabeçalhos da área de vídeo.
const sanfona_videoHeaders = document.querySelectorAll('.sanfona_video-header');

// Percorre cada um deles.
sanfona_videoHeaders.forEach(header => {

    // Adiciona o clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo correspondente.
        const sanfona_videoContent = header.nextElementSibling;

        // Abre ou fecha o conteúdo.
        sanfona_videoContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DAS LISTAS OL E UL
// ===============================

// Seleciona todos os cabeçalhos da área de listas.
const sanfona_oulHeaders = document.querySelectorAll('.sanfona_oul-header');

// Percorre os elementos encontrados.
sanfona_oulHeaders.forEach(header => {

    // Adiciona o evento de clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo associado.
        const sanfona_oulContent = header.nextElementSibling;

        // Alterna entre mostrar e esconder.
        sanfona_oulContent.classList.toggle('active');
    });
});


// ===============================
// BLOQUEIO DE ZOOM COM CTRL + RODA DO MOUSE
// ===============================

// document.addEventListener adiciona um evento ao documento inteiro.
// Aqui estamos ouvindo o evento "wheel", que acontece quando a rodinha do mouse gira.
document.addEventListener('wheel', function(e) {

    // e.ctrlKey verifica se a tecla CTRL está pressionada ao mesmo tempo.
    if (e.ctrlKey) {

        // preventDefault impede o comportamento padrão do navegador.
        // Nesse caso, evita o zoom com CTRL + roda do mouse.
        e.preventDefault();
    }

// { passive: false } é necessário para permitir o preventDefault nesse evento.
}, { passive: false });


// ===============================
// BLOQUEIO DE GESTO DE ZOOM EM TOQUE
// ===============================

// Esse evento é usado em alguns dispositivos com tela sensível ao toque.
document.addEventListener('gesturestart', function(e) {

    // Impede o zoom por gesto.
    e.preventDefault();
});