// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector("div");

// Создание разметки
const createItem = (src, source, text) => {

  return `
  <a class="gallery__item" href=${source}>
  <img class="gallery__image" src=${src} alt=${text} />
</a>
    `;
};

// Перебор элементов и создание галереии

const createGallery = (galleryItems, createItem) => {
  // map imagesArray & create items
  const result = galleryItems
    .map(({ preview, original, description }) => {
      return createItem(preview, original, description);
    })
    .join("");

  // insert items into div
  gallery.insertAdjacentHTML("afterbegin", result);

  return gallery;
};

const murkup = createGallery(galleryItems, createItem);
document.querySelector("body").append(murkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "left", captionDelay: 250  });