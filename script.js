let number = document.querySelector('#number');
let lowBtn = document.querySelector('#lowBtn');
let resetBtn = document.querySelector('#resetBtn');
let addBtn = document.querySelector('#addBtn');
let count = 0;

lowBtn.addEventListener('click', lessNum);
resetBtn.addEventListener('click', resetNum);
addBtn.addEventListener('click', addNum);

function lessNum(){
    count--;
    number.innerHTML = count;

    if(count < 0){
        number.style.color = 'RED';
    }

    if(count === 0){
        number.style.color = "BLACK";
    }
}

function addNum(){
    count++;
    number.innerHTML = count;
    if(count > 0){
        number.style.color = 'GREEN';
    }
    if(count === 0){
        number.style.color = "BLACK";
    }
}

function resetNum(){
    if(count === 0){
        alert('nothing to reset here.')
    }else{
        count = 0;
        number.innerHTML = count;
        if(count === 0){
            number.style.color = "BLACK";
        }
    }
    
}
