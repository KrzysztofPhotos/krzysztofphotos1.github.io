function addBlur(){
    const toBlur1 = document.querySelector(".container-elements");
    const toBlur2 = document.querySelector(".title");
    const toBlur3 = document.querySelector(".parallax");
    const toBlur4 = document.querySelector(".navbar");
    toBlur1.classList.add("blur");
    toBlur2.classList.add("blur");
    toBlur3.classList.add("blur");
    toBlur4.classList.add("blur");
}

function hideBlur(){
    const toBlur1 = document.querySelector(".container-elements");
    const toBlur2 = document.querySelector(".title");
    const toBlur3 = document.querySelector(".parallax");
    const toBlur4 = document.querySelector(".navbar");
    toBlur1.classList.remove("blur");
    toBlur2.classList.remove("blur");
    toBlur3.classList.remove("blur");
    toBlur4.classList.remove("blur");
}

function przesun(i){
    var numb = i + "%";
    cont1.style.left = numb;
    var opacity_num = i * 2/100;
    cont1.style.opacity = opacity_num;
}

function wysun(i){
    var numb = 50 + i + "%";
    cont1.style.left = numb;
    var opacity_num = 1.00 + (i-1)*(-0.02);
    cont1.style.opacity = opacity_num;
}

const close1 = document.querySelector(".close1");
const btn1 = document.querySelector(".box1");
const cont1 = document.querySelector(".cont1");

btn1.addEventListener("click", () => {
    cont1.classList.remove("active");

    console.log("kliknieto");
    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            przesun(i);
        }, 3 * i);
      }
    addBlur();
})

close1.addEventListener("click", () => {
    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            wysun(i);
        }, 3 * i);
    }
    hideBlur();
    setTimeout(() => {cont1.classList.add("active"); }, 200);
})


