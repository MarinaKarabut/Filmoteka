import headerMain from '../templates/header-main.hbs';
import movieGallery from '../templates/movie-gallery.hbs';
import footer from '../templates/footer.hbs';
import modalWindow from '../templates/modal-window.hbs';
import footerSrc from '../images/sprite.svg';
import pagination from '../templates/pagination.hbs';

const refs = {
    headerMain: document.getElementById('header-main'),
    gallery: document.getElementById('movie-gallery'),
    pagination: document.getElementById('spiner-container'),
    footer: document.getElementById('footer'),
    modalWindow: document.getElementById('modal-window'),
};

export default function addBaseTmp() { 
    
refs.headerMain.innerHTML = headerMain();
refs.gallery.innerHTML = movieGallery();
refs.pagination.innerHTML = pagination();
refs.footer.innerHTML = footer({src: footerSrc});
refs.modalWindow.innerHTML = modalWindow();
}
addBaseTmp();