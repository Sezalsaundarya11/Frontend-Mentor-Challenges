let btn = document.querySelector('.share-icon')
let shareCard = document.querySelector('.bottom-nav')
let bottomContent = document.querySelector('.bottom-content-left')
// let bottomContentRight = document.querySelector('.bottom-content-right')
let mobileBtn = document.querySelector('.mobile-btn')
let x= document.querySelector('.share-hide-btn')
let body =document.querySelector('body')

btn.addEventListener('click',()=>{
    shareCard.classList.toggle('show-card');
});

mobileBtn.addEventListener('click', ()=>{
    shareCard.classList.toggle('show-card');
});

const removeHiddenSection = () => shareCard.classList.remove("show-card");

document.addEventListener("click", function (e) {
    let targetSection = btn.contains(e.target);
    let showntargetSection = x.contains(e.target);
    if (!showntargetSection && !targetSection) {
      removeHiddenSection();
    }
});





