// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const image = document.getElementById("person-img")
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let index = 0;

//  default from array
window.addEventListener("DOMContentLoaded", function () {
  getReview(index);
});

// used to update view with reviews based on id passed as a parameter
const getReview = function (i) {
  let indexItem = reviews[i];
  image.src = indexItem.img;
  author.textContent = indexItem.name;
  job.textContent = indexItem.job;
  info.textContent = indexItem.text;
}

// get next review button
nextBtn.addEventListener("click", () => {
  let i = ++index;
  if (i > reviews.length - 1){
    index = 0;
    i = index;
  }
  getReview(i);
});

// get prev review button
prevBtn.addEventListener("click", () => {
  let i = --index;
  if (i < 0){
    index = reviews.length - 1;
    i = index;
  }
  getReview(i);
});

// get random review
randomBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * reviews.length)
  getReview(randomIndex);
});

// Button Press on keyboard
const rightPress = new Event('click');
const leftPress = new Event('click');
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight")
    nextBtn.dispatchEvent(rightPress);
  
  if (e.key === "ArrowLeft")
    prevBtn.dispatchEvent(leftPress);
});