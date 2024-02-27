let btn1 =document.querySelector('#btn1')
let btn2 =document.querySelector('#btn2')
let btn3 =document.querySelector('#btn3')
let btn4 =document.querySelector('#btn4')
let btn5 =document.querySelector('#btn5')

let submitBtn = document.querySelector('.submit-btn')
let thankyouCard = document.querySelector('.thankyou-card-container');
let ratingCard = document.querySelector('.rating-card-container');
let ratingValue = document.querySelector('#rating-value');

let color = 'hsl(25, 97%, 53%)';
let rating = 0;


    btn1.addEventListener('click', () => {
        disableBtn([btn2,btn3,btn4,btn5]);
        btn1.style.backgroundColor = color; 
        rating = btn1.textContent;
    });

    btn2.addEventListener('click', () => {
        disableBtn([btn1,btn3,btn4,btn5]);
        btn2.style.backgroundColor = color; 
        rating = btn2.textContent;
    });

    btn3.addEventListener('click', () => {
        disableBtn([btn2,btn1,btn4,btn5]);
        btn3.style.backgroundColor = color; 
        rating = btn3.textContent;
    });

    btn4.addEventListener('click', () => {
        disableBtn([btn2,btn3,btn1,btn5]);
        btn4.style.backgroundColor = color; 
        rating = btn4.textContent;
    });

    btn5.addEventListener('click', () => {
        disableBtn([btn2,btn3,btn4,btn1]);
        btn5.style.backgroundColor = color; 
        rating = btn5.textContent;
    });


const disableBtn = (buttonList) =>{
    for(let i =0; i<buttonList.length; i++){
        buttonList[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
    }
} 

submitBtn.addEventListener('click',()=>{
    thankyouCard.classList.remove('hidden');
    ratingCard.classList.add('hidden');
    ratingValue.textContent = rating;

})