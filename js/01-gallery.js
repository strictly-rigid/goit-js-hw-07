import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItems(gallery) {
   return gallery.map(({preview, original, description}) => {
        return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </li>
        `;
    }).join('');

       }

const galleryWrapper = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryWrapper.insertAdjacentHTML('beforeend', galleryMarkup);

galleryWrapper.addEventListener('click', firstGalleryHandler);

console.log(galleryWrapper);

function firstGalleryHandler(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="855">`, {
        onShow: () => {window.addEventListener('keydown', onEscClick);},
        onClose: () => {window.removeEventListener('keydown', onEscClick);},
    });
    instance.show();

    function onEscClick(event) {
        if (event.code === 'Escape') {
            window.removeEventListener('keydown', onEscClick);
            instance.close();
        }
    }
}



