let movies = [
  {
    name: "The Falcon and The Winter Soldier",
    des:
      "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019), Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip.",
    image: "Images/slider 2.png"
  },
  {
    name: "Loki",
    des:
      "The series takes place after the events of the film Avengers: Endgame (2019), in which an alternate version of Loki created a new timeline & continues his journey being a prominent part of the evolution of multiverse.",
    image: "Images/slider 1.png"
  },
  {
    name: "Wanda Vision",
    des:
      "Three weeks after the events of Avengers: Endgame (2019), Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true nature. As their surroundings begin to move through different decades and they encounter various television tropes, the couple suspects that things are not as they seem.",
    image: "Images/slider 3.png"
  },
  {
    name: "Raya and the Last Dragon",
    des:
      "Raya and the Last Dragon is about the titular warrior princess, Raya. She seeks out the fabled last dragon, hoping to restore the dragon gem that would bring back her father and banish the evil spirits known as the Druun from the land of Kumandra.",
    image: "Images/slider 4.png"
  },
  {
    name: "Luca",
    des:
      "Set on the Italian Riviera, the film centers on Luca Paguro, a young sea monster boy with the ability to assume human form while on land, who explores the town of Portorosso with his new best friend, Alberto Scorfano, experiencing a life-changing summer adventure.",
    image: "Images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 7000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
