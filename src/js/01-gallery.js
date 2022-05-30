import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems ;

console.log(galleryItemsEl)

const markup = galleryItemsEl.map(({ preview, original, description }) => {
   return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`}).join("");

console.log(markup);

galleryEl.insertAdjacentHTML("afterbegin", markup);

//lib

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);
