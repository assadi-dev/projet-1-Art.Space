/** Screen Display slider */
const prevBtn = document.querySelector("#display-prev");
const nextBtn = document.querySelector("#display-next");

/**recupere les elements contients la class blog-art-slider-item*/
const displayScreenImages = document.querySelectorAll(".slider-item-section");
/** Index de l'image qui qui sera incrementé ou decrementé lors du clic */
let displayScreenIndex = 0;

/**Blog Art Slider */
const bolgPrevBtn = document.querySelector("#blog-art-slider-prev");
const bolgNextBtn = document.querySelector("#blog-art-slider-next");

/**recupere les elements contients la class blog-art-slider-item*/
const blogItems = document.querySelectorAll(".blog-art-slider-item");

/** Index de l'image qui qui sera incrementé ou decrementé lors du clic */
let blogArtIndex = 0;

/** fonction passeé au slide suivant retire la classe active de l'elements puis le passe l'element suivant */
const blogNext = () => {
  if (blogArtIndex < blogItems.length - 1) {
    blogItems[blogArtIndex].classList.remove("slider-item-active");
    blogArtIndex++;
    blogItems[blogArtIndex].classList.add("slider-item-active");
  } else {
    blogItems[blogArtIndex].classList.remove("slider-item-active");
    blogArtIndex = 0;
    blogItems[blogArtIndex].classList.add("slider-item-active");
  }
};

const displayNext = () => {
  if (displayScreenIndex < blogItems.length - 1) {
    displayScreenImages[displayScreenIndex].classList.remove(
      "display-screen-active"
    );
    displayScreenIndex++;
    displayScreenImages[displayScreenIndex].classList.add(
      "display-screen-active"
    );
  } else {
    displayScreenImages[displayScreenIndex].classList.remove(
      "display-screen-active"
    );
    displayScreenIndex = 0;
    displayScreenImages[displayScreenIndex].classList.add(
      "display-screen-active"
    );
  }
};

/** fonction passeé au slide précédent retire la classe active de l'elements puis le passe l'element precedent  */

const displayPrev = () => {
  if (displayScreenIndex > 0) {
    displayScreenImages[displayScreenIndex].classList.remove(
      "display-screen-active"
    );
    displayScreenIndex--;
    displayScreenImages[displayScreenIndex].classList.add(
      "display-screen-active"
    );
  } else if (displayScreenIndex == 0) {
    displayScreenImages[displayScreenIndex].classList.remove(
      "display-screen-active"
    );
    displayScreenIndex = displayScreenImages.length - 1;
    displayScreenImages[displayScreenIndex].classList.add(
      "display-screen-active"
    );
  }
};

const blogPrev = () => {
  if (blogArtIndex > 0) {
    blogItems[blogArtIndex].classList.remove("slider-item-active");
    blogArtIndex--;
    blogItems[blogArtIndex].classList.add("slider-item-active");
  } else if (blogArtIndex == 0) {
    blogItems[blogArtIndex].classList.remove("slider-item-active");
    blogArtIndex = blogItems.length - 1;
    blogItems[blogArtIndex].classList.add("slider-item-active");
  }
};

bolgNextBtn.addEventListener("click", blogNext);
bolgPrevBtn.addEventListener("click", blogPrev);

prevBtn.addEventListener("click", displayPrev);
nextBtn.addEventListener("click", displayNext);
