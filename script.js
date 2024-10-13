let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";  // Fixed typo
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);
// skillciecle///////////////////////////////////////////////////////
const circles = document.querySelectorAll('.circle');

circles.forEach((elem) => {
  const dots = parseInt(elem.getAttribute('data-dots')); // Total number of dots
  const percent = parseInt(elem.getAttribute('data-percent')); // Percentage of completion
  const marked = Math.floor(dots * percent / 100); // Number of marked dots (filled)

  const rotate = 360 / dots; // Rotation for each point
  let points = '';

  // Generate points with their positions
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }

  elem.innerHTML = points; // Insert generated points into the circle

  // Sequentially add the 'marked' class to create a progressive fill effect
  const pointsElems = elem.querySelectorAll('.points');
  pointsElems.forEach((point, index) => {
    if (index < marked) {
      setTimeout(() => {
        point.classList.add('marked');
      }, index * 100); // Delay of 100ms per point for sequential appearance
    }
  });
});


// mixit up poetfolio se4ction
var mixer = mixitup('.portfolio-gallery')
// active menu//////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activemenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLi.forEach(sec => sec.classList.remove("active"));
  if (menuLi[len]) {
    menuLi[len].classList.add("active");
  }
}
activemenu();
window.addEventListener("scroll", activemenu);
// sticky navbar////////////////
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 50);
});
 
let menuIcon=document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")
menuIcon.onclick= ()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}     
window.onscroll= ()=>{
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove ("open")
}     
