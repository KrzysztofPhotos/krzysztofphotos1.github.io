const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {    
    addNewImages();
})

function addNewImages(){
    let imageNum = 10;
    for (let i = 0; i < imageNum; i++) {
        const newImgEl =  document.createElement("img");
    
        newImgEl.src = `https://picsum.photos/500?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImgEl);
    }
}