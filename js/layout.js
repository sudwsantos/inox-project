var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'orcamento.html';
        });
    });
});

document.getElementById('cotizacionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulario enviado exitosamente!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.getElementById('imageGallery');
    const selectedImage = document.getElementById('selectedImage');

    // Array of image paths
    const images = [
        'css/imgs/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg',
        'css/imgs/avi-werde-hHz4yrvxwlA-unsplash.jpg',
        'css/imgs/john-fornander-tVzyDSV84w8-unsplash.jpg'
        // Add more image paths as needed
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Thumbnail';
        img.addEventListener('click', () => {
            selectedImage.src = src;
        });
        imageGallery.appendChild(img);
    });

    document.getElementById('fazerOrcamentoBtn').addEventListener('click', function () {
        window.location.href = 'orcamento.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const navClose = document.getElementById('navClose');
    const nav = document.querySelector('.nav');

    navMenu.addEventListener('click', () => {
        nav.classList.add('open');
    });

    navClose.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});
