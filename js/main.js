const packages = document.querySelectorAll('.package');
const numLeft = document.querySelectorAll('.num');
const btnRewards = document.querySelectorAll('.btn_reward')

const balance = document.getElementById('balance')
const price = document.querySelectorAll('.price')
const backers = document.querySelector('.backer')

const progressBar = document.querySelector('.progress_bar--blue')
console.log(progressBar)
console.log(backers.textContent)

updateProgressBar();
//Smanjuje vrednost 
btnRewards.forEach((btn,i) =>{
    
   btn.addEventListener('click',()=>{
        numLeft[i].innerHTML = numLeft[i].textContent - 1;
        let priceInt = Number(price[i].textContent);
        addToBalance(priceInt)
        backers.innerHTML = parseInt(backers.textContent) + 1;
         updateProgressBar();



    if(Number(numLeft[i].textContent < 1 )){
        packages[i].classList.add('active');
        numLeft[i].innerHTML =0;
        btn.innerHTML = 'Out of stock';
    } 

   })
})

function addToBalance(sum){
   const newBalance = Number(balance.textContent) + sum;
   balance.innerHTML = newBalance;

    
}
function updateProgressBar(){
   progressBar.style.width = Number(balance.textContent) / 100000 * 100 + '%';

}