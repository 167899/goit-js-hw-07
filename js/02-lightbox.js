import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBlock = document.querySelector(".gallery");

const galleryItemsString = galleryItems
  .map((element) => {
    const card = `<a class="gallery__item" href=${element.original}>
  <img class="gallery__image" src=${element.preview} alt= ${element.description} />
</a>`;

    return card;
  })
  .join("");

galleryBlock.insertAdjacentHTML("afterbegin", galleryItemsString);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
