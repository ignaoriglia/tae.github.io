const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");

bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}
function closeImg(){
    fulImgBox.style.display = "none";
}



