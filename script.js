let turn = 'X';
let isgameover = false;
const reset = document.querySelector('#reset');
//Function to change the turn
const changeTurn = ()=>{

    return turn === 'X'?'0':'X';
}
// Function to check win
const checkWin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText === boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText !== '')){
            document.querySelector('.Info').innerText = boxtexts[e[0]].innerText + " WON";
            isgameover = true;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "200px" 
        }
    });
}


//Main Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxtext');
    
    element.addEventListener('click', ()=>{
        if(boxText.innerText===''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('Info')[0].innerText = "Turn for "+ turn;
            }
        }
        reset.addEventListener('click', e=>{
            turn = 'X'
            document.getElementsByClassName('Info')[0].innerText = "Turn for "+ turn;
            boxText.innerText = '';
            isgameover = false;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "0"
        })
    });
});

