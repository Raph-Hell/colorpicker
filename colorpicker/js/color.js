const button = document.querySelector('button#color');
const copy = document.querySelector('button#pick');
let clipBoard = document.querySelector('#username');

button.addEventListener('click', ()=>{
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let random = list[Math.floor(Math.random() * 15)]
    let random1 = list[Math.floor(Math.random() * 15)]
    let random2 = list[Math.floor(Math.random() * 15)]
    let random3 = list[Math.floor(Math.random() * 15)]
    let random4 = list[Math.floor(Math.random() * 15)]
    let random5 = list[Math.floor(Math.random() * 15)]
    let color = `#${random}${random1}${random2}${random3}${random4}${random5}`;
        
    const body = document.body;
    body.style.backgroundColor = color;
    clipBoard.value = color;
})

copy.addEventListener('click', ()=>{
    clipBoard.select();
    clipBoard.setSelectionRange(0, 999999);

    document.execCommand('copy');
    window.alert('copied');
})