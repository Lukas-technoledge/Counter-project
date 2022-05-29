const counter = document.querySelector('.counter');
const lowerCountBtn = document.querySelector('#lowerCountBtn');
const addCountBtn = document.querySelector('#addCountBtn');

let count = 0;

const decreaseValue = () => {
    count--
    counter.innerHTML = count;
    if(counter.innerHTML < 0){
        counter.style.color = 'red'
    }else if(counter.innerHTML == 0){
        counter.style.color = 'white'
    }
};
const increaseValue = () => {
    count++
    counter.innerHTML = count;
    if(counter.innerHTML > 0){
        counter.style.color = 'green'
    }else if(counter.innerHTML == 0){
        counter.style.color = 'white'
    }
};



lowerCountBtn.addEventListener('click', decreaseValue);
addCountBtn.addEventListener('click', increaseValue);