let btn = document.querySelector('.share-icon')
let shareCard = document.querySelector('.bottom-nav')
let bottomContent = document.querySelector('.bottom-content-left')
let mobileBtn = document.querySelector('.mobile-btn')

btn.addEventListener('click',()=>{
    shareCard.classList.toggle('show-card');
});

if(document.querySelector('body').offsetWidth <658){

    mobileBtn.addEventListener('click',()=>{
        shareCard.classList.toggle('show-card');
        if(!shareCard.classList.contains('.show-card'))
            mobileBtn.classList.remove('show-btn');
    })

}

