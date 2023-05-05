import { galleryItems } from './gallery-items.js';
// Change code below this line

function createSecondGalleryItems(gallery) {
   return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
        }).join('');

       }

        const secondGalleryWrapper = document.querySelector(".gallery");
        const secondGalleryMarkup = createSecondGalleryItems(galleryItems);

        secondGalleryWrapper.insertAdjacentHTML('beforeend', secondGalleryMarkup);
      

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });