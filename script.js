const cardWapper = document.querySelector(".card-wrapper");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const santa = document.querySelector(".santa");
const tree = document.querySelector(".tree");
const stars = document.querySelector(".stars");

cardWapper.addEventListener("mousemove", (rotate) => {
    let x = (innerWidth / 2 - rotate.pageX) / 15;
    let y = (innerHeight / 2 - rotate.pageY) / 15;

    card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});

cardWapper.addEventListener("mouseover", () => {
   card.classList.add("change");
   stars.classList.add("fall");
});

cardWapper.addEventListener("mouseout", () =>{
    card.classList.remove("change");
    stars.classList.remove("fall");
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
})
