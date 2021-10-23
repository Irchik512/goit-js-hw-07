import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const galleryMurkup = galleryItems
  .map((item) => {
    const { preview, original, description } = item;
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
  `;
  })
  .join("");
galleryRef.insertAdjacentHTML("afterbegin", galleryMurkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryRef.addEventListener("click", openBigImage);

function openBigImage(event) {
  event.preventDefault();
}
