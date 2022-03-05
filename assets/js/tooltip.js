/**Tooltip */

const standardCard = document.querySelector("#standard-card");
const unlimitedCard = document.querySelector("#unlimited-card");
let standarTooltip = document.querySelector("#tooltip-standard");

/**
 *
 * @param {number} x valeur de l'axe X
 * @param {number} y valeur de l'axe Y
 * @param {*} element l'element qu'on shouaite faire apparaitre
 * Apparition du tooltip avec 10px pour avoir un décalage entre le curseur et l'élément
 */
const showTooltip = (x, y, element) => {
  element.style.opacity = 1;
  element.style.top = `${y + 10}px`;
  element.style.left = `${x + 10}px`;
};

/**
 *
 * @param {*} element l'element qu'on shouaite caché.
 */
const hideTooltip = (element) => {
  element.style.opacity = 0;
  element.style.top = "0px";
  element.style.left = "0px";
};

/**Standard Tooltip */
standardCard.addEventListener("mouseover", () => {
  let posY = 0;
  let posX = 0;

  standardCard.addEventListener("mousemove", (event) => {
    posY = event.pageY;
    posX = event.pageX;
    showTooltip(posX, posY, standarTooltip);
  });
});

standardCard.addEventListener("mouseleave", () => {
  hideTooltip(standarTooltip);
});

/**Unlimited Tooltip */
unlimitedCard.addEventListener("mouseover", () => {
  let posY = 0;
  let posX = 0;

  unlimitedCard.addEventListener("mousemove", (event) => {
    posY = event.pageY;
    posX = event.pageX;
    showTooltip(posX, posY, standarTooltip);
  });
});

unlimitedCard.addEventListener("mouseleave", () => {
  hideTooltip(standarTooltip);
});
