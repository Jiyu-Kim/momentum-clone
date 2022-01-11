const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// create a <img></img> tag
//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;

// put a <img></img> tag into body
//document.body.appendChild(bgImage);
const imgPath = `img/${chosenImage}`;
document.body.style.backgroundImage = "url(" + imgPath + ")";
