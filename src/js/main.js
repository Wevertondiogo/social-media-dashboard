import { profileInSocialRedes, overviewToday } from "./cards.js";

const q = (q) => document.querySelector(q);
const qAll = (q) => document.querySelectorAll(q);
const CardComponent = (card) =>
  `
    <div class="card">
      <div class="card-header">
        <img src="${card.img}">
        <p>${card.tag}</p>
      </div>
      <div class="card-body">
        <h2 class="followers">${card.followers}</h2>
        <p>${card.text.toUpperCase()}</p>
      </div>
      <div class="card-footer">
      <img class="icon" src="${card.icon}">
       <p class="${card.style}">${card.today}</p>
      </div>
    </div>
 `;

const overview = (props) =>
  `
  <div class="overview">
  <div class="overview-header">
    <p>${props.text}</p>
    <img src="${props.img}" >
  </div>
  <div class="overview-body">
    <h2 class="likes">${props.likes}</h2>
    <div class="porcentagem">
      <img src="${props.icon}">
      <p class="${props.style}">${props.porcentagem}</p>
    </div>
  </div>
  </div>

  `;

const setCardInfo = () =>
  profileInSocialRedes.map((card) => CardComponent(card)).join("");

const titleOverview = `<h3 class="title-overview">Overview - Today</h3>`;

const setOverviewInfo = () =>
  overviewToday.map((view) => overview(view)).join("");

q(".container").innerHTML = setCardInfo() + titleOverview + setOverviewInfo();

const classCondition = (cards) =>
  cards?.classList[0] === "card" || cards?.classList[0] === "overview";

const setTheme = () => {
  const body = q("body");
  const topBg = q(".top-bg");
  const container = q(".container");
  const line = q(".line");
  for (let i = 0; i <= container.children.length; i++) {
    if (classCondition(container.children[i])) {
      const cards = container.children[i];

      if (check.checked) {
        body.style.backgroundColor = "hsl(230, 17%, 14%)";
        topBg.style.backgroundColor = "hsl(232, 19%, 15%)";
        cards.style.backgroundColor = "hsl(228, 28%, 20%)";
        line.style.backgroundColor = "hsl(225, 100%, 98%)";
      } else {
        body.style.backgroundColor = "hsl(0, 0%, 100%)";
        topBg.style.backgroundColor = "hsl(225, 100%, 98%)";
        cards.style.backgroundColor = "hsl(227, 47%, 96%)";
        line.style.backgroundColor = "hsl(232, 19%, 15%)";
      }
    }
  }
  setColorText();
  setColorTitle();
  effectMouseCards();
};

const setColorText = () => {
  const p = qAll("p");
  for (let i = 0; i <= p.length; i++) {
    if (p[i]?.classList.value === "") {
      const modifiedP = p[i];
      if (check.checked) {
        modifiedP.style.color = "hsl(228, 34%, 66%)";
      } else {
        modifiedP.style.color = "hsl(228, 12%, 44%)";
      }
    }
  }
};

const setColorTitle = () => {
  const h2 = qAll("h2");
  const h3 = qAll("h3");
  for (let i = 0; i <= h2.length; i++) {
    if (h2[i] !== undefined) {
      if (check.checked) {
        h2[i].style.color = "hsl(0, 0%, 100%)";
      } else {
        h2[i].style.color = "hsl(230, 17%, 14%)";
      }
    }
  }
  for (let i = 0; i <= h3.length; i++) {
    if (h3[i] !== undefined) {
      if (check.checked) {
        h3[i].style.color = "hsl(0, 0%, 100%)";
      } else {
        h3[i].style.color = "hsl(228, 12%, 44%)";
      }
    }
  }
};

const effectMouseCards = () => {
  const container = q(".container");
  for (let i = 0; i <= container.children.length; i++) {
    if (classCondition(container.children[i])) {
      const cards = container.children[i];

      cards.addEventListener("mouseover", () => {
        if (check.checked) {
          cards.style.backgroundColor = "#ffffff33";
        } else {
          cards.style.backgroundColor = "#aeb3cb5b";
        }
      });
      cards.addEventListener("mouseout", () => {
        if (check.checked) {
          cards.style.backgroundColor = "hsl(228, 28%, 20%)";
        } else {
          cards.style.backgroundColor = "hsl(227, 47%, 96%)";
        }
      });
    }
  }
};

const check = q("input");
check.addEventListener("click", setTheme);
