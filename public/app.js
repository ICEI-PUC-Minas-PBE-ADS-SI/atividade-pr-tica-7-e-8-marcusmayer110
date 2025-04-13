
document.addEventListener('DOMContentLoaded', function () {
    const imagem = document.getElementById('imagemRedirecionamento');
    imagem.addEventListener('click', function () {
        window.location.href = 'detalhes.html';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const filmes = [
        {
            id: 1,
            titulo: "Demon Slayer",
            imagem: "images/movie1.jpg",
            descricao: "Um caçador de demônios em ação!",
            paginaDetalhes: "detalhes.html"
        },
        {
            id: 2,
            titulo: "Jujutsu Kaisen",
            imagem: "images/movie3.jpg",
            descricao: "Feiticeiros vs maldições.",
            paginaDetalhes: "detalhes.html"
        },
        {
            id: 3,
            titulo: "Os Simpsons",
            imagem: "images/movie4.jpg",
            descricao: "A família mais maluca da TV.",
            paginaDetalhes: "detalhes.html"
        }
    ];

    const container = document.getElementById('cardContainer');

    filmes.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('card', 'm-2');
        card.style.width = '125px';

        card.innerHTML = `
            <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
            <div class="card-body">
                <h5 class="card-title">${filme.titulo}</h5>
                <p class="card-text">${filme.descricao}</p>
                <a href="${filme.paginaDetalhes}" class="btn btn-primary">Ver mais</a>
            </div>
        `;

        container.appendChild(card);
    });
});