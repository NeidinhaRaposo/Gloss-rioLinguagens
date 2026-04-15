// ===============================
// SANFONA DO DISPLAY
// ===============================

// Seleciona todos os botões da sanfona que usam a classe "sanfonah1-header".
const sanfonah1Headers = document.querySelectorAll('.sanfonah1-header');

// Percorre cada botão encontrado.
sanfonah1Headers.forEach(header => {

    // Adiciona um evento de clique em cada botão.
    header.addEventListener('click', () => {

        // Pega o próximo elemento que vem logo depois do botão clicado.
        // Nesse caso, é o conteúdo da sanfona.
        const sanfonah1Content = header.nextElementSibling;

        // Alterna a classe "active".
        // Se não tiver, adiciona. Se já tiver, remove.
        sanfonah1Content.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO JUSTIFY-CONTENT
// ===============================

// Seleciona todos os botões da sanfona com a classe "sanfona_a-header".
const sanfona_aHeaders = document.querySelectorAll('.sanfona_a-header');

// Percorre cada botão encontrado.
sanfona_aHeaders.forEach(header => {

    // Adiciona o evento de clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo logo abaixo do botão clicado.
        const sanfona_aContent = header.nextElementSibling;

        // Abre ou fecha a sanfona.
        sanfona_aContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO BOX-SHADOW E OUTRAS
// ===============================

// Seleciona todos os botões com a classe "sanfona_botao-header".
const sanfona_botaoHeaders = document.querySelectorAll('.sanfona_botao-header');

// Percorre cada botão.
sanfona_botaoHeaders.forEach(header => {

    // Adiciona o clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo relacionado ao botão.
        const sanfona_botaoContent = header.nextElementSibling;

        // Alterna a classe "active".
        sanfona_botaoContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO GRADIENTE
// ===============================

// Seleciona todos os botões com a classe "sanfona_img-header".
const sanfona_imgHeaders = document.querySelectorAll('.sanfona_img-header');

// Percorre cada botão encontrado.
sanfona_imgHeaders.forEach(header => {

    // Quando clicar...
    header.addEventListener('click', () => {

        // ...pega o conteúdo logo abaixo...
        const sanfona_imgContent = header.nextElementSibling;

        // ...e abre ou fecha esse conteúdo.
        sanfona_imgContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO TEXTO COM SOMBRA
// ===============================

// Seleciona os botões da área "sanfona_main-header".
const sanfona_mainHeaders = document.querySelectorAll('.sanfona_main-header');

// Percorre cada botão.
sanfona_mainHeaders.forEach(header => {

    // Adiciona o clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo correspondente.
        const sanfona_mainContent = header.nextElementSibling;

        // Abre ou fecha o conteúdo.
        sanfona_mainContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DA ROTAÇÃO
// ===============================

// Seleciona os botões da área "sanfona_footer-header".
const sanfona_footerHeaders = document.querySelectorAll('.sanfona_footer-header');

// Percorre cada botão da lista.
sanfona_footerHeaders.forEach(header => {

    // Quando houver clique...
    header.addEventListener('click', () => {

        // ...pega o próximo elemento...
        const sanfona_footerContent = header.nextElementSibling;

        // ...e alterna a classe active.
        sanfona_footerContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO ACTIVE
// ===============================

// Seleciona todos os botões com a classe "sanfona_input-header".
const sanfona_inputHeaders = document.querySelectorAll('.sanfona_input-header');

// Percorre os botões encontrados.
sanfona_inputHeaders.forEach(header => {

    // Adiciona o evento de clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo da sanfona.
        const sanfona_inputContent = header.nextElementSibling;

        // Alterna mostrar ou esconder.
        sanfona_inputContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DA TRANSITION
// ===============================

// Seleciona os botões da área de áudio.
const sanfona_audioHeaders = document.querySelectorAll('.sanfona_audio-header');

// Percorre cada um deles.
sanfona_audioHeaders.forEach(header => {

    // Define o clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo relacionado.
        const sanfona_audioContent = header.nextElementSibling;

        // Alterna a classe active.
        sanfona_audioContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO HOVER
// ===============================

// Seleciona os botões da área de vídeo.
const sanfona_videoHeaders = document.querySelectorAll('.sanfona_video-header');

// Percorre todos eles.
sanfona_videoHeaders.forEach(header => {

    // Adiciona o evento de clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo correspondente.
        const sanfona_videoContent = header.nextElementSibling;

        // Abre ou fecha o conteúdo.
        sanfona_videoContent.classList.toggle('active');
    });
});


// ===============================
// SANFONA DO CURSOR PERSONALIZADO
// ===============================

// Seleciona os botões da área "sanfona_pon-header".
const sanfona_ponHeaders = document.querySelectorAll('.sanfona_pon-header');

// Percorre os botões encontrados.
sanfona_ponHeaders.forEach(header => {

    // Adiciona o evento de clique.
    header.addEventListener('click', () => {

        // Pega o conteúdo logo abaixo do botão.
        const sanfona_ponContent = header.nextElementSibling;

        // Alterna a classe "active".
        sanfona_ponContent.classList.toggle('active');
    });
});


// ===============================
// BLOQUEIO DE ZOOM COM CTRL + RODA DO MOUSE
// ===============================

// Escuta o evento da rodinha do mouse no documento inteiro.
document.addEventListener('wheel', function(e) {

    // Verifica se a tecla CTRL está pressionada.
    if (e.ctrlKey) {

        // Impede o comportamento padrão do navegador.
        // Aqui isso evita o zoom com CTRL + roda do mouse.
        e.preventDefault();
    }

// passive: false permite que o preventDefault funcione nesse evento.
}, { passive: false });


// ===============================
// BLOQUEIO DE GESTO DE ZOOM EM TELA TOUCH
// ===============================

// Escuta o gesto de zoom em alguns dispositivos touch.
document.addEventListener('gesturestart', function(e) {

    // Impede o zoom por gesto.
    e.preventDefault();
});