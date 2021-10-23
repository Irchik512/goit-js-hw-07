import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMurkup = galleryItems
  .map((item) => {
    const { preview, original, description } = item;
    return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
  })
  .join("");
galleryRef.insertAdjacentHTML("afterbegin", galleryMurkup);

const instance = basicLightbox.create(`<img class="modal" src="">`, {
  onShow: () => {
    window.addEventListener("keydown", keydownEsc);
  },
  onClose: () => {
    window.removeEventListener("keydown", keydownEsc);
  },
});
galleryRef.addEventListener("click", openBigImage);

function keydownEsc(event) {
  if (event.key === "Escape") instance.close();
  return;
}

function openBigImage(event) {
  event.preventDefault();

  if (event.target.classList.value === "gallery__image") {
    instance.element().querySelector("img").src = event.target.dataset.source;
    instance.show();
  }
}
