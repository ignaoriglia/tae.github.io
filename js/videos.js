const videos = [
    {
     id: "DJH1nspiJcM",
    },
    {
        id: "dhrM4F6DK_s",
    },
    {
        id: "LVoURSFwVAc",
    },
    {
        id: "qgfzSEa1IIs",
    },
     ];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

const moreOptions = document.querySelector("#bmore");
const moreMenu = document.querySelector(".more .menu");

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});


bNext.addEventListener("click", (e) => {
    let changed = current;
    current = current +1 < videos.length ? current + 1: current;
    if (current === changed) {
    renderCurrentVideo(videos[current].id);
    }
});

bNext.addEventListener("click", (e) => {
    current = current -1 >= 0 ? current - 1: current;
    if (current === changed) {
    renderCurrentVideo(videos[current].id);
    }
});

renderCurrentVideo(videos[current].id);

function renderCurrentVideo(id){
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="TURISMO AVENTURA 🌞 Los Reyunos, San Rafael, Mendoza" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}