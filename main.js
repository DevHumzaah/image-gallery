
let scrollContainer= document.querySelector(".gallery");
let backBtn=document.getElementById("backbtn");
let nextBtn=document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft +=evt.deltaY;
    scrollContainer.style.scrollBehaviour="auto";
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour="smooth";
    scrollContainer.scrollLeft -= 900;
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour="smooth";
    scrollContainer.scrollLeft += 900;
});




