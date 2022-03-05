/**Tooltip */

const standardCard = document.querySelector("#standard-card");
const unlimitedCard = document.querySelector("#unlimited-card");

const offres = [
  {
    title: "Brandwidth Limit 1",
    description:
      "Brandwith is a measurement of how much traffic your site is servering to visitors. Every image and page of your site must be dowloaded by your site must be dowloaded by your visitors with every request.The more media and video your site serves,the more bandwidth it will require",
  },
  {
    title: "Brandwidth Limit 2",
    description:
      "Brandwith is a measurement of how much traffic your site is servering to visitors. Every image and page of your site must be dowloaded by your site must be dowloaded by your visitors with every request.The more media and video your site serves,the more bandwidth it will require",
  },
];

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

/**
 * Fonction qui permet de generer le tooltip.
 * @param {array} data tableau qui contient le texte à inserer
 */
const tootltipContent = (data) => {
  let div = document.createElement("div");
  let title = document.createElement("h3");
  let description = document.createElement("p");
  div.classList.add("tooltip-style");

  div.appendChild(title);
  div.appendChild(description);
  let priceRow = document.querySelector(".pricing-row");
  priceRow.appendChild(div);

  title.textContent = data.title;
  description.textContent = data.description;
};

tootltipContent(offres[0]);
tootltipContent(offres[1]);

const standardTooltip = document.querySelectorAll(".tooltip-style");
const unlimitedTooltip = document.querySelectorAll(".tooltip-style");

/**Standard Tooltip */
standardCard.addEventListener("mouseover", () => {
  let posY = 0;
  let posX = 0;

  standardCard.addEventListener("mousemove", (event) => {
    posY = event.pageY;
    posX = event.pageX;
    showTooltip(posX, posY, standardTooltip[0]);
  });
});

standardCard.addEventListener("mouseleave", () => {
  hideTooltip(standardTooltip[0]);
});

/**Unlimited Tooltip */
unlimitedCard.addEventListener("mouseover", () => {
  let posY = 0;
  let posX = 0;

  unlimitedCard.addEventListener("mousemove", (event) => {
    posY = event.pageY;
    posX = event.pageX;
    showTooltip(posX, posY, unlimitedTooltip[1]);
  });
});

unlimitedCard.addEventListener("mouseleave", () => {
  hideTooltip(unlimitedTooltip[1]);
});
