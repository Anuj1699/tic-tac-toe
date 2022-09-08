const box = document.querySelectorAll('.one-box');
let cPlayer = "X";
let b_1 = document.querySelector('.b1');
let b_2 = document.querySelector('.b2');
let b_3 = document.querySelector('.b3');
let b_4 = document.querySelector('.b4');
let b_5 = document.querySelector('.b5');
let b_6 = document.querySelector('.b6');
let b_7 = document.querySelector('.b7');
let b_8 = document.querySelector('.b8');
let b_9 = document.querySelector('.b9');

const checkWin = () => {
    if(b_1.innerHTML == 'X' && b_2.innerHTML == 'X' && b_3.innerHTML == 'X' || b_1.innerHTML == 'O' && b_2.innerHTML == 'O' && b_3.innerHTML == 'O') {  
        if (b_1.innerHTML == 'X' && b_2.innerHTML == 'X' && b_3.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
        
    }
    else if(b_4.innerHTML == 'X' && b_5.innerHTML == 'X' && b_6.innerHTML == 'X' || b_4.innerHTML == 'O' && b_5.innerHTML == 'O' && b_6.innerHTML == 'O') {    
        if (b_4.innerHTML == 'X' && b_5.innerHTML == 'X' && b_6.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
    }
    else if(b_7.innerHTML == 'X' && b_8.innerHTML == 'X' && b_9.innerHTML == 'X' || b_7.innerHTML == 'O' && b_8.innerHTML == 'O' && b_9.innerHTML == 'O') { 

        if (b_7.innerHTML == 'X' && b_8.innerHTML == 'X' && b_9.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
    }
    else if(b_1.innerHTML == 'X' && b_5.innerHTML == 'X' && b_9.innerHTML == 'X' || b_1.innerHTML == 'O' && b_5.innerHTML == 'O' && b_9.innerHTML == 'O') {    
        if (b_1.innerHTML == 'X' && b_5.innerHTML == 'X' && b_9.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
    }
    else if(b_3.innerHTML == 'X' && b_5.innerHTML == 'X' && b_7.innerHTML == 'X' || b_3.innerHTML == 'O' && b_5.innerHTML == 'O' && b_7.innerHTML == 'O') {    
        if (b_3.innerHTML == 'X' && b_5.innerHTML == 'X' && b_7.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
    }
    else if(b_1.innerHTML == 'X' && b_4.innerHTML == 'X' && b_7.innerHTML == 'X' || b_1.innerHTML == 'O' && b_4.innerHTML == 'O' && b_7.innerHTML == 'O') {    
        if (b_1.innerHTML == 'X' && b_4.innerHTML == 'X' && b_7.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
    }
    else if(b_2.innerHTML == 'X' && b_5.innerHTML == 'X' && b_8.innerHTML == 'X' || b_2.innerHTML == 'O' && b_5.innerHTML == 'O' && b_8.innerHTML == 'O') {    
        if (b_2.innerHTML == 'X' && b_5.innerHTML == 'X' && b_8.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
    }
    else if(b_3.innerHTML == 'X' && b_6.innerHTML == 'X' && b_9.innerHTML == 'X' || b_3.innerHTML == 'O' && b_6.innerHTML == 'O' && b_9.innerHTML == 'O') {    
        if (b_3.innerHTML == 'X' && b_6.innerHTML == 'X' && b_9.innerHTML == 'X'){
            document.querySelector('.chance').innerHTML = `X Won`;
            stopClick();
        }
        else {
            document.querySelector('.chance').innerHTML = `O Won`;
            stopClick();
        }
    }
    else if (b_1.innerHTML != '' && b_2.innerHTML != '' && b_3.innerHTML != '' && b_4.innerHTML != '' && b_5.innerHTML != '' && b_6.innerHTML != '' && b_7.innerHTML != '' && b_8.innerHTML != '' && b_9.innerHTML != ''){
        document.querySelector('.chance').innerHTML = `!! MATCH DRAW !!`;
        stopClick();
    }

}

const changeTurn = () => {
    // cPlayer = cPlayer == 'X' ? 'O' : 'X';
    Array.from(box);
    if (cPlayer == 'X'){
        cPlayer = 'O';
    }else {
        cPlayer = 'X';
    }
}

Array.from(box).forEach((e) => {
    e.addEventListener('click', () => {
        if (e.innerHTML == ""){
          e.innerHTML = cPlayer;
          changeTurn();
          document.querySelector('.chance').innerHTML = `Turn of ${cPlayer}`; 
          checkWin();  
        }  
        
    });
});
const stopClick = () => {
    Array.from(box).forEach((e) => {
        e.removeEventListener('click', () => {
            
        });
    });
    
}

reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    location.reload();
})


    