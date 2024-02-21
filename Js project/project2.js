
// 1st Section
const generateMemeBtn = document.querySelector(
  ".meme-generator.generate-meme-btn"
);

const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");

const memeAuthor = document.querySelector(".meme-generator .meme-Author");




const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json()) // Fix here
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  

/* 3rd Section
const updateDetails = (url,title,author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeTitle.innerHTML = 'Meme by: ${author';

} */

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};



// 2nd Section
const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes") //this link was taken by https://github.com/D3vd/Meme_Api
    .then((Response) => (Response) => Response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};


generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
