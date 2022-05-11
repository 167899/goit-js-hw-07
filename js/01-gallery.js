import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBlock = document.querySelector(".gallery");

const galleryItemsString = galleryItems
  .map((element) => {
    const card = `<div class="gallery__item">
  <a class="gallery__link" href=${element.original}>
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt= ${element.description}
    />
  </a>
</div>`;
    return card;
  })
  .join("");

galleryBlock.insertAdjacentHTML("afterbegin", galleryItemsString);

function onClick(event) {
  event.preventDefault();
  if (event.target.className === "gallery__image") {
    const imgOriginalSrc = event.target.dataset.source;
    console.dir(event.target);
    const instance = basicLightbox.create(`
    <img src='${imgOriginalSrc}' width="800" height="600">
`);

    instance.show();
  }
}

galleryBlock.addEventListener("click", onClick);
