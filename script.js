let div = document.querySelector('.container')
let cnt = 400;

for (let i = 0; i < cnt; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    div.appendChild(box);
}

let boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    let hue = Math.random() * 360;
    let duration = Math.random() * 3;
    box.addEventListener('mouseover', (e) => {
        box.classList.add('active')
        box.style.animationDuration = 1 + duration + "s";
        e.target.style.backgroundColor = `hsl(${hue}, 52%, 58%)` 
        hue += 10;
    })
    
}