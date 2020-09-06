const q = (q) => document.querySelector(q);
const qAll = (q) => document.querySelectorAll(q);
const profileInSocialRedes = [
  {
    img: "../../images/icon-facebook.svg",
    tag: "@natahanf",
    followers: 1987,
    text: "f o l l o w e r s",
    icon: "../../images/icon-up.svg",
    today: "12 Today",
    style: "green",
  },
  {
    img: "../../images/icon-twitter.svg",
    tag: "@natahanf",
    followers: 1044,
    text: "f o l l o w e r s",
    icon: "../../images/icon-up.svg",
    today: "99 Today",
    style: "green",
  },
  {
    img: "../../images/icon-instagram.svg",
    tag: "@natahanf",
    followers: "11k",
    text: "f o l l o w e r s",
    icon: "../../images/icon-up.svg",
    today: "1099 Today",
    style: "green",
  },
  {
    img: "../../images/icon-youtube.svg",
    tag: "@natahanf",
    followers: 8239,
    text: "s u b s c r i b e r s",
    icon: "../../images/icon-down.svg",
    today: "144 Today",
    style: "red",
  },
];

const overviewToday = [
  {
    text: "Page Views",
    img: "../../images/icon-facebook.svg",
    likes: 87,
    icon: "../../images/icon-up.svg",
    porcentagem: "3%",
    style: "green",
  },
  {
    text: "Likes",
    img: "../../images/icon-facebook.svg",
    likes: 52,
    icon: "../../images/icon-down.svg",
    porcentagem: "2%",
    style: "red",
  },
  {
    text: "Likes",
    img: "../../images/icon-instagram.svg",
    likes: 5462,
    icon: "../../images/icon-up.svg",
    porcentagem: "2257%",
    style: "green",
  },
  {
    text: "Profile Views",
    img: "../../images/icon-instagram.svg",
    likes: "52k",
    icon: "../../images/icon-up.svg",
    porcentagem: "1375%",
    style: "green",
  },
  {
    text: "RetWeets",
    img: "../../images/icon-twitter.svg",
    likes: 117,
    icon: "../../images/icon-up.svg",
    porcentagem: "303%",
    style: "green",
  },
  {
    text: "Likes",
    img: "../../images/icon-twitter.svg",
    likes: 507,
    icon: "../../images/icon-up.svg",
    porcentagem: "553%",
    style: "green",
  },
  {
    text: "Page Views",
    img: "../../images/icon-youtube.svg",
    likes: 107,
    icon: "../../images/icon-down.svg",
    porcentagem: "19%",
    style: "red",
  },
  {
    text: "Total Views",
    img: "../../images/icon-youtube.svg",
    likes: 1407,
    icon: "../../images/icon-down.svg",
    porcentagem: "12%",
    style: "red",
  },
];

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

const h3 = `<h3>Overview - Today</h3>`;

const setOverviewInfo = () =>
  overviewToday.map((view) => overview(view)).join("");

q(".container").innerHTML = setCardInfo() + h3 + setOverviewInfo();

const classCondition = (className) =>
  className?.classList[0] === "card" || className?.classList[0] === "overview";

const setTheme = () => {
  const body = q("body");
  const topBg = q(".top-bg");
  const container = q(".container");
  for (let i = 0; i <= container.children.length; i++) {
    if (classCondition(container.children[i])) {
      const className = container.children[i];
      if (check.checked) {
        body.style.backgroundColor = "hsl(230, 17%, 14%)";
        topBg.style.backgroundColor = "hsl(232, 19%, 15%)";
        className.style.backgroundColor = "hsl(228, 28%, 20%)";
      } else {
        body.style.backgroundColor = "hsl(0, 0%, 100%)";
        topBg.style.backgroundColor = "hsl(225, 100%, 98%)";
        className.style.backgroundColor = "hsl(227, 47%, 96%)";
      }
    }
  }
  setColorText();
  setColorTitle();
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
  for (let i = 0; i <= h2.length; i++) {
    if (h2[i] !== undefined) {
      if (check.checked) {
        h2[i].style.color = "hsl(0, 0%, 100%)";
      } else {
        h2[i].style.color = "hsl(230, 17%, 14%)";
      }
    }
  }
};

const check = q("input");
check.addEventListener("click", setTheme);
